import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export type tUpdateAdvertisement = {
  name?: string
  description?: string
  short_description?: string
  contract_type?: string
}
export default class UpdateAdvertisementValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string.optional(),
    description: schema.string.optional(),
    short_description: schema.string.optional(),
    contract_type: schema.string.optional(),
  })
}
