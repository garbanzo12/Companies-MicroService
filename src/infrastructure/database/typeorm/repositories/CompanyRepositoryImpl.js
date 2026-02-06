import { Company } from '../../../../domain/entities/Company.js';
export class CompanyRepositoryImpl {
    constructor(pool) {
        this.pool = pool;
    }

    async findAll() {
        const result = await this.pool.request().query('SELECT Id, Name, State FROM dbo.Companies');
        
        // Mapeo de la respuesta
        return result.recordset.map(row => new Company({
            id: row.Id,
            name: row.Name,
            state: row.State
        }));
    }
    async findById(id) {
        const result = await this.pool.request().input("id",id).query(`SELECT Id, Name, State FROM dbo.Companies WHERE Id = @id`);
        if (result.recordset.length === 0) return null //Validación de existencia del registro 
        const row = result.recordset[0];
        return new Company({id: row.Id, name: row.Name, state: row.State})
    }   
}