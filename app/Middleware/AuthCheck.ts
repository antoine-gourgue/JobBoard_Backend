import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthCheck {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    if (await auth.check()) {
      return response.badRequest('You are already logged in.')
    }
    await next()
  }
}
