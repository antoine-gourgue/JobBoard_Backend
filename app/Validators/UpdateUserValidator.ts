import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules } from '@adonisjs/validator/build/src/Rules'

export type tUpdateUser = {
  name: string
  firstName: string
  email: string
  phone: string | undefined
  address: string | undefined
  roleId: number | undefined
}

export default class UpdateUserValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(),
    firstName: schema.string(),
    email: schema.string({}, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email', whereNot: { id: this.ctx.params.id } }),
    ]),
    phone: schema.string.optional(),
    address: schema.string.optional(),
    roleId: schema.number.optional(),
  })
}
