import { DataSource } from 'apollo-datasource';
import { Model } from 'sequelize';
import { DB } from '../types/db/index';

type User = {
  id: number;
  email: string;
  name: string;
  created_at: Date;
  updated_at: Date;
};

export default class UserAPI extends DataSource {
  private store: DB;

  constructor(store: DB) {
    super();
    this.store = store;
  }

  async findUser(): Promise<User> {
    const result: User = await this.store.User.findOne({
      where: { id: 1 },
    }).then((project: Model) => {
      return project.get();
    });

    return result;
  }
}
