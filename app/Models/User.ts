import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import UserRole from 'App/Models/UserRole'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public firstName: string

  @column()
  public name: string

  @column()
  public phone: string

  @column()
  public address: string

  @column()
  public roleId: number

  @belongsTo(() => UserRole)
  public userRole: BelongsTo<typeof UserRole>

  @column({ serializeAs: null })
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
