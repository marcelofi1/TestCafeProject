import { faker, fakerEN_US } from '@faker-js/faker';

const joinUser = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: `12${faker.internet.password()}`,
  birthday: '10261976',
  zipCode: fakerEN_US.location.zipCode(),
  country: 'United States',
  countryCode: fakerEN_US.location.countryCode(),
  phoneNumber: '326-511-2323',
};

export default joinUser;