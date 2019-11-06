import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  course_name: string;

  @Column()
  block: string;

  @Column()
  teacher_name: string;

  @Column()
  room: string;

  @Column()
  is_compulsory: boolean;
}
