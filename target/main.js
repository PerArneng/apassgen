///<reference path="../../../typings/colors.d.ts" />
///<reference path="../../../typings/node.d.ts" />
var colors = require('colors');
var version = "0.1.6";
var nodeArgs = process.argv.slice(2);
for (var arg in nodeArgs) {
    console.log(arg);
}
console.log(colors.green.bold("APassgen 1.0"));
