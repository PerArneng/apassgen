
///<reference path="../../../typings/colors.d.ts" />
///<reference path="../../../typings/node.d.ts" />

import colors = require('colors');

var version:string = "0.1.6";
var nodeArgs:string[] = process.argv.slice(2);

for (var arg in nodeArgs) {
    console.log(arg)
}

console.log(colors.green.bold("APassgen 1.0"))

