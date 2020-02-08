import * as fs from 'fs';

const courseSeed = []
const block = ['I_A', 'I_B', 'II_A', 'II_B', 'III_A', 'III_B', 'IV_A', 'IV_B', 'V_A', 'V_B', 'VI'];
const courseName = ['現代文', '古典', '数学', '生物', '科学', '物理', '地学', '日本史', '世界史', '英語', 'PE', 'HFL'];
const teacherName = ['Aさん', 'Bさん', 'Cさん', 'Dさん', 'Eさん', 'Fさん', 'Gさん', 'Hさん', 'Iさん',];
let courseIndex;
let teacherIndex;
let blockIndex;

(async () => {
  for (let index = 0; index < 50; index++) {
    courseIndex = index % courseName.length;
    teacherIndex = index % teacherName.length;
    blockIndex = index % block.length;
    await courseSeed.push({
      id: ('0000' + index).slice(-4),
      course_name: courseName[courseIndex],
      block: block[blockIndex],
      teacher_name: teacherName[teacherIndex],
      room: ('000' + index).slice(-3),
      is_compulsory: index % 3 === 0 ? true : false
    })
  }
  console.log(courseSeed)
  await fs.unlink('src/seed/course.seed.ts', (err) => {
    console.log('error', err);
  });
  await fs.writeFileSync('src/seed/course.seed.ts', courseSeed.toString(), 'utf-8')

})();

