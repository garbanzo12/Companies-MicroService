export class CompanyController {
  constructor(getAllCompaniesUseCase) {
    this.getAllCompaniesUseCase = getAllCompaniesUseCase
  }

  getAll = async (req, res) => {
    const companies = await this.getAllCompaniesUseCase.execute()
    res.json(companies)
  }
}