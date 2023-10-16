import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserService } from 'App/Services/UserService'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return UserService.all()
  }

  public async getById({ params }: HttpContextContract) {
    return UserService.getById(params.id)
  }

  public async update({ request, params }: HttpContextContract) {
    const payload = await request.validate(UpdateUserValidator)
    return UserService.update(params.id, payload)
  }

  public async delete({ params, response }: HttpContextContract) {
    await UserService.delete(params.id)
    response.status(204)
  }
}
