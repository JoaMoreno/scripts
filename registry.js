#!/usr/bin/env node
require("dotenv").config();

const registry = process.argv.slice(2).join()
const listRegistry = JSON.parse(process.env.REGISTRY)

const execSync = require('child_process').execSync;

Object.getOwnPropertyNames(listRegistry).forEach(function(registryName, idx, array) {
    if(registry === registryName){
        execSync(`npm set registry ${listRegistry[registryName]}`);
        console.log('✔️ ',execSync(` npm config get registry`).toString());
    }
  });
