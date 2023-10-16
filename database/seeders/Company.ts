import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CompanyFactory from 'Database/factories/CompanyFactory'

export default class CompanySeeder extends BaseSeeder {
  public async run() {
    await CompanyFactory.createMany(50)
  }
}
