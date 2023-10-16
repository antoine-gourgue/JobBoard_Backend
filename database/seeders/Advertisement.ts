import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AdvertisementFactory from 'Database/factories/AdvertisementFactory'

export default class AdvertisementSeeder extends BaseSeeder {
  public async run() {
    await AdvertisementFactory.createMany(50)
  }
}
