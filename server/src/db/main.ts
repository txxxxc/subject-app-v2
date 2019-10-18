import models from './models';
import { Model } from 'sequelize/types';

(async () => {
  await models.User.sync({ force: true });
  await models.Course.sync({ force: true });

  const user = models.User.build({
    name: 'hoge',
    password: 'hoge',
    email: 'hoge',
    created_at: Date.now(),
    updated_at: Date.now(),
  });

  await user.save();

  await models.User.findOne({
    where: { id: 1 },
  }).then((project: Model) => {
    console.log(project.get());
  });
})();
