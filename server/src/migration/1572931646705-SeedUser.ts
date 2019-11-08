import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { userSeed } from '../seed/user.seed';
import { courseSeed } from '../seed/course.seed';

export class SeedUser1572931646705 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const user = await getRepository('user').save(userSeed);
    const course = await getRepository('course').save(courseSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
