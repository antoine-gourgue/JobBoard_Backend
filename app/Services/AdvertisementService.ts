import Advertisement from 'App/Models/Advertisement'
import type { tUpdateAdvertisement } from 'App/Validators/UpdateAdvertisementValidator'
import type { tCreateAdvertisement } from 'App/Validators/CreateAdvertisementValidator'
import User from 'App/Models/User'
import ApplyJobs from 'App/Models/ApplyJobs'

export class AdvertisementService {
  public static async all(user: User | undefined): Promise<Advertisement[]> {
    const advertisements = await Advertisement.all()
    for (let advertisement of advertisements) {
      if (!user) {
        advertisement._userAlreadyApplied = false
      } else {
        const applyJobEntry: ApplyJobs | null = await ApplyJobs.query()
          .where('user_id', user.id)
          .andWhere('advertisement_id', advertisement.id)
          .first()

        advertisement._userAlreadyApplied = !!applyJobEntry
      }
    }
    return advertisements
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
