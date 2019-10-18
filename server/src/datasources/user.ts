import { DataSource } from 'apollo-datasource';
import { Model } from 'sequelize';
import { DB } from '../../types/db/index';

export default class UserAPI extends DataSource {
  private store: DB;

  constructor(store: DB) {
    super();
    this.store = store;
  }

  async findUser(): Promise<any> {
    const result: any = await this.store.User.findOne({
      where: { id: 1 },
    }).then((project: Model) => {
      return project.get();
    });

    return result;
  }
}
