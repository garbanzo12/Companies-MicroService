export class GetCompaniesById {
  constructor(CompanyRepositoryById) {
    this.CompanyRepositoryById = CompanyRepositoryById;
  }

  async execute(id) {
    return await this.CompanyRepositoryById.findById(id);
  }
}