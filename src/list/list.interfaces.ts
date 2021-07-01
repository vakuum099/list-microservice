import { Optional } from 'sequelize';

export interface ListAttributes {
  uuid?: string;
  name: string;
}

export interface ListCreationAttribute extends Optional<ListAttributes, 'uuid'> {}
