import Company from 'App/Models/Company'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Company, ({ faker }) => {
  return {
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
  }
}).build()
