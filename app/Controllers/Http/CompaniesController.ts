import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CompanyService } from 'App/Services/CompanyService'
import CreateCompanyValidator from 'App/Validators/CreateCompanyValidator'
import UpdateCompanyValidator from 'App/Validators/UpdateCompanyValidator'

export default class CompaniesController {
  public async index({}: HttpContextContract) {
    return CompanyService.all()
  }
  public async getById({ params }: HttpContextContract) {
    return CompanyService.getById(params.id)
  }
  public async create({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateCompanyValidator)
    const company = await CompanyService.create(payload)
    return response.created(company)
  }
  public async update({ request, params }: HttpContextContract) {
    const payload = await request.validate(UpdateCompanyValidator)
    return CompanyService.update(params.id, payload)
  }

  public async delete({ params, response }: HttpContextContract) {
    await CompanyService.delete(params.id)
    response.status(204)
  }
}
