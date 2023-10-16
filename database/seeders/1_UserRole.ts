import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserRole from 'App/Models/UserRole'

export default class extends BaseSeeder {
  public async run() {
    await UserRole.createMany([{ name: 'admin' }, { name: 'user' }, { name: 'recruiter' }])
  }
}
