import { Column, Model, Table } from 'sequelize-typescript';

// TO DO: add more strict attibute model? https://github.com/RobinBuschmann/sequelize-typescript/pull/865/files
@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
