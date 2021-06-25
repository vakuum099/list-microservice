export interface IContact {
  uuid: {
    type: number;
    defaultValue: number;
    autoIncrement: boolean;
    primaryKey: boolean;
    allowNull: false;
  };
  name: {
    type: number;
    allowNull: boolean;
  };
  email: {
    type: string;
    allowNull: boolean;
  };
}
