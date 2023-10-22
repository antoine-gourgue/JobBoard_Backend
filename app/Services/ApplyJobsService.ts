import ApplyJob from 'App/Models/ApplyJobs'
import type { tCreateApplyJobs } from 'App/Validators/CreateApplyJobsValidator'

export class ApplyJobsServices {
  public static async create(applyJobsCommand: tCreateApplyJobs): Promise<ApplyJob> {
    return await ApplyJob.create(applyJobsCommand)
  }
}
