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
    const user = await this.getById(userId)
    await user.delete()
  }
}
