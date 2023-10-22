import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules } from '@adonisjs/validator/build/src/Rules'

export type tCreateApplyJobs = {
  user_id: number
  advertisement_id: number
}
export default class CreateApplyJobsValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    user_id: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    advertisement_id: schema.number([rules.exists({ table: 'advertisements', column: 'id' })]),
  })
}
