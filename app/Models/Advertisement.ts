import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { computed } from '@adonisjs/lucid/build/src/Orm/Decorators'

export default class Advertisement extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public short_description: string

  @column()
  public contract_type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public _userAlreadyApplied?: boolean

  @computed()
  public get userAlreadyApplied(): boolean {
    return this._userAlreadyApplied || false
  }
}
