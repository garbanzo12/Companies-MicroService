export class CompanyController {
  constructor(getAllCompaniesUseCase,getCompaniesByIdUseCase) {
    this.getAllCompaniesUseCase = getAllCompaniesUseCase
    this.getCompaniesByIdUseCase = getCompaniesByIdUseCase
  }

  getAll = async (req, res) => {
    const companies = await this.getAllCompaniesUseCase.execute()
    if(!companies) return res.status(404).json({message:"Companies not found"});
    res.json(companies)
  }
  getById= async (req, res) => {
    const {id} = req.params;
    const companies = await this.getCompaniesByIdUseCase.execute(id)
    if(!companies) return res.status(404).json({message:"Company not found"});

    res.json(companies)
  }
}