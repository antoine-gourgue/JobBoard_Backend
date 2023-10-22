import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AdvertisementService } from 'App/Services/AdvertisementService'
import CreateAdvertisementValidator from 'App/Validators/CreateAdvertisementValidator'
import UpdateAdvertisementValidator from 'App/Validators/UpdateAdvertisementValidator'
import User from 'App/Models/User'

export default class AdvertisementsController {
  public async index({ auth }: HttpContextContract) {
    const user: User | undefined = auth.user as User
    return AdvertisementService.all(user)
  }
  public async getById({ params }: HttpContextContract) {
    return AdvertisementService.getById(params.id)
  }

  public async create({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateAdvertisementValidator)
    const advertisement = await AdvertisementService.create(payload)
    return response.created(advertisement)
  }
  public async update({ request, params }: HttpContextContract) {
    const payload = await request.validate(UpdateAdvertisementValidator)
    return AdvertisementService.update(params.id, payload)
  }

  public async delete({ params, response }: HttpContextContract) {
    await AdvertisementService.delete(params.id)
    response.status(204)
  }
}
