import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export type tCreateAdvertisement = {
  name: string
  description: string
  short_description: string
  contract_type: string
}
export default class CreateAdvertisementValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(),
    description: schema.string(),
    short_description: schema.string(),
    contract_type: schema.string(),
  })
}
