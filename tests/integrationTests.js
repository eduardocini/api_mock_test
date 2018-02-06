'use strict';

const Joi = require('joi');
const request = require('supertest');
const expect = require('chai').expect;
const joiAssert = require('joi-assert');
const faker = require('faker');

const URL = 'http://localhost:3000/';
const EMPLOYEE_PATH = 'v1/employee/';
const COMPANY_PATH = 'v1/company/';

const {
  companySchema,
  employeeSchema
} = require('./schema');


const newEmployee = (payload) => {
  return new Promise((resolve, reject) => {
    request(URL)
      .post(EMPLOYEE_PATH)
      .set('Content-Type', /json/)
      .send(payload)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return reject(err);
        return resolve(res);
      });
  });
};

const newCompany = (payload) => {
  return new Promise((resolve, reject) => {
    request(URL)
      .post(COMPANY_PATH)
      .set('Content-Type', /json/)
      .send(payload)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return reject(err);
        return resolve(res);
      });
  });
}

describe('API Mock Test using json-server', () => {
  it('Register a new employee', (done) => {
    let payload = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      job: faker.name.jobTitle(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      allocated: faker.random.boolean(),
    };
    newEmployee(payload)
      .then((res) => {
        expect(res.status).to.be.equal(201);
        joiAssert(res.body, employeeSchema);
        done()
      })
      .catch(done);
  });

  it('Register a new company', (done) => {
    let payload = {
      companyName: faker.company.companyName(),
      address: faker.address.streetAddress(),
      country: faker.address.country(),
      state: faker.address.stateAbbr()
    };
    newCompany(payload)
      .then((res) => {
        console.log(JSON.stringify(res.body, "  ", 2))
        expect(res.status).to.be.equal(201);
        joiAssert(res.body, companySchema);
        done()
      })
      .catch(done);
  });
});