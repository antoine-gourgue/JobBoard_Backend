import Advertisement from 'App/Models/Advertisement'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Advertisement, ({ faker }) => {
  return {
    name: faker.commerce.productName(),
    description: faker.lorem.paragraphs(3),
    short_description: faker.lorem.sentence(),
    contract_type: faker.helpers.arrayElement(['Full-Time', 'Part-Time', 'Contract', 'Temporary']),
  }
}).build()
