import Advertisement from 'App/Models/Advertisement'
import type { tUpdateAdvertisement } from 'App/Validators/UpdateAdvertisementValidator'
import type { tCreateAdvertisement } from 'App/Validators/CreateAdvertisementValidator'

export class AdvertisementService {
  public static async all(): Promise<Advertisement[]> {
    return Advertisement.all()
  }
  public static async getById(advertisementId: number): Promise<Advertisement> {
    return await Advertisement.findByOrFail('id', advertisementId)
  }
  public static async create(advertisementCommand: tCreateAdvertisement): Promise<Advertisement> {
    return await Advertisement.create(advertisementCommand)
  }
  public static async update(
    advertisementId: number,
    advertisementCommand: tUpdateAdvertisement
  ): Promise<Advertisement> {
    const advertisement = await this.getById(advertisementId)
    advertisement.merge(advertisementCommand)
    return await advertisement.save()
  }
  public static async delete(advertisementId: number) {
    const advertisement = await this.getById(advertisementId)
    await advertisement.delete()
  }
}
