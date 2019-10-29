/* eslint-disable @typescript-eslint/camelcase */
import { DataSource } from 'apollo-datasource';
import { Model } from 'sequelize';
import { DB } from '../types/db/index';

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

// 作るべきもの
// searchCourseByName searchCourseByTeacher searchCourseByblock searchCourseByCompulsory

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

  async searchCoursesByName(name: string): Promise<Course> {
    const result: Course = await this.store.Course.findAll({
      where: {
        name,
      },
    }).them((value: Model) => {
      return value.get();
    });

    return result;
  }

  async searchCoursesByTeacher(teacher_name: string): Promise<Course> {
    const result: Course = await this.store.Course.findAll({
      where: {
        teacher_name,
      },
    }).them((value: Model) => {
      return value.get();
    });

    return result;
  }

  async searchCoursesByBlock(block: string): Promise<Course> {
    const result: Course = await this.store.Course.findAll({
      where: {
        block,
      },
    }).them((value: Model) => {
      return value.get();
    });

    return result;
  }

  async searchCoursesByCompulsory(): Promise<Course> {
    const result: Course = await this.store.Course.findAll({
      where: {
        is_compulsory: true,
      },
    }).them((value: Model) => {
      return value.get();
    });

    return result;
  }
}
