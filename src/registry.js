#!/usr/bin/env node
const config = require('./config.json')
const registryArg = process.argv.slice(2).join()
const registryList = config.registry;
const execute = require('child_process').exec;

Object.getOwnPropertyNames(registryList).forEach(function(registryName, idx, array) {
    if(registryArg === registryName){
	    execute(`npm set registry ${config.registry[registryName]}`,()=>{
            execute(` npm config get registry`,(error, stdout, stderr)=>{
                console.log('registry >',stdout);
            })
        });
    }
  });
