#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2));

//console.log(args);

if(args.v || args.version ){
console.log('v1.0.0');
}



