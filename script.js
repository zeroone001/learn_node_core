#!/usr/bin/env node
var arg = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var exec = require('child_process').exec;
var program = require('commander');
const chalk = require('chalk');
const log = console.log;
//console.log(process.argv);

//console.log(arg);

/*if(args.v || args.version ){
console.log('v1.0.0');
}else if(args.help){
  fs.createReadStream('./us.txt').pipe(process.stdout);  
}*/
function range(val){
  return val.split('..').map(Number);
}
function list(val){
  return val.split(',');
}
program.version(require('./package.json').version)
  .usage('<path> [options]')
  .option('-v --verbose', 'vvvvvvv')
  .option('-o --output <path>', 'lujing')
  .option('-l --list [item]', 'liebiao',list)
  .option('-r --range <a>..<b>', 'a range', range)
  .command('install [name]', 'install this name')
  .action(function(env, options){
    log('env_name', env);

  })
  .parse(process.argv);

log(chalk.blue(program.args));
//log('output',chalk.green.bgBlue(program.output));
log(' range: %j, %j', program.range[0], program.range[1])
log('list', program.list);

