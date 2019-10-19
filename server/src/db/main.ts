import models from './models';
import { Model } from 'sequelize/types';

(async () => {
  // UserテーブルとCourseテーブルを無ければ作成。あれば、上書き
  await models.User.sync({ force: true });
  await models.Course.sync({ force: true });

  // seed挿入
  const user = models.User.build({
    name: 'hoge',
    password: 'hoge',
    email: 'hoge',
    created_at: Date.now(),
    updated_at: Date.now(),
  });

  await user.save();
  // findOne(options: Object): Promise<Model>
  // thenのあとの引数にはPromise<T>のTの型が入る
  // 参考URL： https://www.gesource.jp/weblog/?p=7663
  await models.User.findOne({
    where: { id: 1 },
  }).then((project: Model) => {
    console.log(project.get());
  });
})();
