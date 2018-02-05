const faker = require('faker');

module.exports = () => ({
  employer: [...Array(20)].map((value, index) => ({
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    job: faker.name.jobTitle(),
    email: faker.internet.email(), 
    phoneNumber: faker.phone.phoneNumber(),
  })),
  company: [...Array(20)].map((value, index) => ({
    id: index + 1,
    companyName: faker.company.companyName(),
    address: faker.address.streetAddress(),
    address: faker.address.country(),
    country: faker.address.country()
  })),
});