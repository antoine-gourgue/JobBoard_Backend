import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ApplyJobsServices } from 'App/Services/ApplyJobsService'
import CreateApplyJobsValidator from 'App/Validators/CreateApplyJobsValidator'

export default class ApplyJobsController {
  public async create({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateApplyJobsValidator)
    const applyJobs = await ApplyJobsServices.create(payload)
    return response.created(applyJobs)
  }
}
