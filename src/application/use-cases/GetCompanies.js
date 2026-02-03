export class GetCompanies {
  constructor(CompanyRepositoryFindAll) {
    this.CompanyRepositoryFindAll = CompanyRepositoryFindAll;
  }

  async execute() {
    return await this.CompanyRepositoryFindAll.findAll();
  }
}
