const faker = require('faker');

module.exports = () => ({
  employee: [...Array(5)].map((value, index) => ({
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    job: faker.name.jobTitle(),
    email: faker.internet.email(), 
    phoneNumber: faker.phone.phoneNumber(),
    allocated: faker.random.boolean(),

  })),
  company: [...Array(5)].map((value, index) => ({
    id: index + 1,
    companyName: faker.company.companyName(),
    address: faker.address.streetAddress(),
    country: faker.address.country(),
    state: faker.address.stateAbbr()
  })),
});