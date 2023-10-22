import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Advertisement from 'App/Models/Advertisement'
import User from 'App/Models/user'

export default class ApplyJobs extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public advertisement_id: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Advertisement)
  public advertisement: BelongsTo<typeof Advertisement>
}
