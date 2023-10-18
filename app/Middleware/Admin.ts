import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'

export default class AdminMiddleware {
  /**
   * Handle request
   */
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    const user = auth.user
    await user?.load('userRole')
    if (user && user.userRole && user.userRole.name === 'admin') {
      await next()
    } else {
      throw new AuthenticationException('Accès non autorisé', 'E_UNAUTHORIZED_ACCESS')
    }
  }
}
