import { Repository } from 'typeorm';
import { User } from '../entity/User';
import { Course } from '../entity/Course';

export interface DataSources {
  userRepository: Repository<User>;
  courseRepository: Repository<Course>;
}
