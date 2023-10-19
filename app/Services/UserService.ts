import User from 'App/Models/User'
import type { tUpdateUser } from 'App/Validators/UpdateUserValidator'

export class UserService {
  public static async all(): Promise<User[]> {
    return User.all()
  }

  public static async getById(userId: number): Promise<User> {
    return await User.findByOrFail('id', userId)
  }

  public static async update(userId: number, userCommand: tUpdateUser): Promise<User> {
    const user = await this.getById(userId)
    user.merge(userCommand)
    return await user.save()
  }

  public static async delete(userId: number) {
    try {
      const user = await this.getById(userId)
      await user.delete()
    } catch (error) {
      if (error.code === 'E_ROW_NOT_FOUND') {
        throw new Error('User not found') // ou vous pouvez choisir de gérer cela autrement
      }
      throw error // Si ce n'est pas l'erreur attendue, relancez-la pour la gérer à un niveau supérieur
    }
  }
}
