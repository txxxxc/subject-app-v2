import { DataSource } from 'apollo-datasource';
import { Model } from 'sequelize';
import { DB } from '../../types/db/index';

type Course = {
  id: number;
  course_name: string;
  block: string;
  teacher_name: string;
  room: string;
  is_compulsory: boolean;
  created_at: Date;
  updated_at: Date;
};

export default class CourseAPI extends DataSource {
  private store: DB;

  constructor(store: DB) {
    super();
    this.store = store;
  }

  async test(): Promise<Course> {
    const result: Course = await this.store.Course.findOne({
      where: { id: 1 },
    }).then((value: Model) => {
      return value.get();
    });

    return result;
  }
}
