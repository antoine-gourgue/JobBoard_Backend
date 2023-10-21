import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserRoleService } from 'App/Services/UserRoleService'

export default class UserRolesController {
  public async index({}: HttpContextContract) {
    return UserRoleService.all()
  }
}
