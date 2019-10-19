/* eslint-disable @typescript-eslint/camelcase */
import { Sequelize, Model, DataTypes } from 'sequelize';

const TABLE_NAME = 'courses';

export default class Courses extends Model {
  public id!: number;

  public created_at!: Date;

  public updated_at!: Date;

  public teacher_name!: string;

  public room!: string;

  public block!: string;

  public course_name!: string;

  public is_compusory!: boolean;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        teacher_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        room: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        block: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        course_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        is_compulsory: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        tableName: TABLE_NAME,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        sequelize,
      },
    );
    return this;
  }
}
