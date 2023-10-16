import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import Hash from '@ioc:Adonis/Core/Hash'

export default Factory.define(User, async ({ faker }) => {
  return {
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    name: faker.person.lastName(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    password: await Hash.make('password123'),
    roleId: faker.number.int({ min: 1, max: 3 }),
  }
}).build()
