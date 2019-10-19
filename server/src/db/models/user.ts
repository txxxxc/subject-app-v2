/* eslint-disable @typescript-eslint/camelcase */
import { Sequelize, Model, DataTypes } from 'sequelize';

export default class User extends Model {
  public id!: number;

  public email!: string;

  public user_name!: string;

  public created_at!: Date;

  public updated_at!: Date;

  // 初期化
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        tableName: 'users',
        underscored: true,
        createdAt: false,
        updatedAt: false,
        sequelize,
      },
    );
    return this;
  }
}
