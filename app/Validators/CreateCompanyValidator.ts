import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export type tCreateCompany = {
  name: string
  description: string
}
export default class CreateCompanyValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(),
    description: schema.string(),
  })
}
