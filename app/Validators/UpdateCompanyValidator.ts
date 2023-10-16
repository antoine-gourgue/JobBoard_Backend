import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export type tUpdateCompany = {
  name: string
  description: string
}
export default class UpdateCompanyValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(),
    description: schema.string(),
  })
}
