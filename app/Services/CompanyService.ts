import Company from 'App/Models/Company'
import type { tUpdateCompany } from 'App/Validators/UpdateCompanyValidator'
import type { tCreateCompany } from 'App/Validators/CreateCompanyValidator'

export class CompanyService {
  public static async all(): Promise<Company[]> {
    return Company.all()
  }

  public static async getById(companyId: number): Promise<Company> {
    return await Company.findByOrFail('id', companyId)
  }
  public static async create(companyCommand: tCreateCompany): Promise<Company> {
    return await Company.create(companyCommand)
  }
  public static async update(companyId: number, companyCommand: tUpdateCompany): Promise<Company> {
    const company = await this.getById(companyId)
    company.merge(companyCommand)
    return await company.save()
  }
  public static async delete(companyId: number) {
    const company = await this.getById(companyId)
    await company.delete()
  }
}
