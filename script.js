#!/usr/bin/env node
var arg = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var exec = require('child_process').exec;
var program = require('commander');
var inquirer = require('inquirer');

const chalk = require('chalk');
const log = console.log;
//console.log(process.argv);

//console.log(arg);

/*if(arg.v || arg.version ){
console.log('v1.0.0');
}else if(arg.help){
  fs.createReadStream('./us.txt').pipe(process.stdout);  
}*/


function range(val){
  return val.split('..').map(Number);
}
function list(val){
  return val.split(',');
}
function install(name, options){
    log('env_name：', name);
    log('options：', options);
}
program.version(require('./package.json').version)
  .usage('<path> [options]')
  .command('init')
  .option('-v --verbose', 'vvvvvvv')
  .option('-o --output <path>', 'lujing')
  .option('-l --list [item]', 'liebiao',list)
  .option('-r --range <a>..<b>', 'a range', range)
  .action(function(options){
    log('options', options);
    log('range', options.range);
  });

program.command('install [option...]')
      .alias('i')
      .description('miaoshu')
      .option('-S,--save', 'save modules as dependencies')
      .option('-D,--save-dev', 'save modules as dependencies')
      .option('-g,--global', 'save modules as global')
      .action(install);

program.command('module')
      .alias('m')
      .description('chuang jian mo kuai')
      .option('--name [modulename]')
      .action(function(option){
        var prop = [];
        prop.push({
          type: 'input',
          name: 'modulename',
          message: '请输入模块名',
          validate: function (input){
            if(!input){
            return 'bu neng wei kong'
            }
            return true;
          }
        });
        
        prop.push({
          type: 'list',
          name: 'moduleType',
          message: '请选择模块类型',
          choices: [
            {
                name: 'a',
                value: 'a_value'
            },
            {
              name: 'b',
              value: 'b_value'
            }
          
          ]
        });
        inquirer.prompt(prop).then(function(an){
            log(an);
        });
      });


/*
 *  自定义帮助信息
 * program.on('--help', () => {
  log('Examples:');
  log('');
  log('');
  log('');
  log('');
  log('');
});*/

program.parse(process.argv);

//log(chalk.blue(program.args));
//log('output',chalk.green.bgBlue(program.output));
//log(' range: %j, %j', program.range[0], program.range[1])
//log('list', program.list);

