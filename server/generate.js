var faker = require('faker');

var database = { patients: []};

for (var i = 1; i<= 300; i++) {
    database.patients.push({
        id: i,
        firstname:faker.name.firstName(),
        lastname:faker.name.lastName(),
        email:faker.internet.email(),
        phoneno:faker.phone.phoneNumber(),
        status:faker.random.boolean()
    });
  }