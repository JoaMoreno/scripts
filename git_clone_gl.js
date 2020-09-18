#!/usr/bin/env node

const gitRepo = process.argv.slice(2).join()

const regex = /gitlab/gi;
const url = gitRepo.replace(regex, 'ijmoreno@gitlab');
let project = gitRepo.split('/');
project = project[project.length - 1].replace('.git','');

const execSync = require('child_process').execSync;
execSync(`git clone ${url}`);

try {
  process.chdir(project);
  execSync(`code .`);
} catch (err) {
  console.error(`chdir: ${err}`);
}