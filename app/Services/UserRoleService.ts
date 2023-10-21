import UserRole from 'App/Models/UserRole'

export class UserRoleService {
  public static async all(): Promise<UserRole[]> {
    return UserRole.all()
  }
}
