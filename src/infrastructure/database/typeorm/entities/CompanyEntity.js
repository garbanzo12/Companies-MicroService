import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Companies', schema: 'dbo' })
export class CompanyEntity {
  @PrimaryColumn({ type: 'int' })
  Id;

  @Column({ type: 'nvarchar', length: 255 })
  Name;

  @Column({ type: 'int' })
  State;
}