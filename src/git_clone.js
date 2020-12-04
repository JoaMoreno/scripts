const config = require('./config.json')
const gitRepo = process.argv.slice(2,3).join()
const regex = /gitlab/gi;
const url = gitRepo.replace(regex, `${config.username}@gitlab`);
let project = gitRepo.split('/');
// TODO: Funciona la mayoría de las veces, no siempre
project = project[project.length - 1].replace('.git','');

const execute = require('child_process').exec;
execute(`git clone ${url}`,(error, stdout, stderr)=>{
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(stdout);
  console.log(stderr);
  process.chdir(project);
  execute(`code .`,()=>{
    if(process.argv.includes('--i')){
      // DANGER experimental
      execute(`npm i`);
    }
  });
});
