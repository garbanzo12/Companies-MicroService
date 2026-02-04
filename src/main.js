import 'reflect-metadata';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();

import express from 'express';
import { poolPromise } from './infrastructure/database/typeorm/mssql-pool.js';
import { CompanyRepositoryImpl } from './infrastructure/database/typeorm/repositories/CompanyRepositoryImpl.js';
import { GetCompanies } from './application/use-cases/GetCompanies.js';
import { GetCompaniesById } from './application/use-cases/GetCompanyById.js';
import {CompanyController} from './infrastructure/http/controllers/CompanyController.js'
const app = express();
app.use(express.json());
app.use(morgan('dev'));
const pool = await poolPromise; // Conexion a la pool mssql  

const repo = new CompanyRepositoryImpl(pool);
const getCompaniesUseCase = new GetCompanies(repo);
const getCompaniesByIdUseCase = new GetCompaniesById(repo);
const companyController = new CompanyController(getCompaniesUseCase, getCompaniesByIdUseCase);

//Endpoints de companies 
app.get('/companies', (req, res) => companyController.getAll(req, res));
app.get('/companies/:id', (req, res) => companyController.getById(req, res));

app.listen(3001, () => {
    console.log('🚀 Microservicio de Compañías (ODBC Nativo) en puerto 3001');
});