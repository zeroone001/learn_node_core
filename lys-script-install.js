let log = console.log;
const program = require('commander');

program
  .usage('<template-name> [project-name]')
  .option('-c, --clone', 'use git clone')
  .option('--offline', 'use cached template')
  .parse(process.argv);

let template = program.args[0];
log(template);
