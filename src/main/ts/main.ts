
///<reference path="../../../typings/colors.d.ts" />
///<reference path="../../../typings/node.d.ts" />

import colors = require('colors');
import apassgen = require('./apassgen')

var version:string = "0.1.6";
var args:string[] = process.argv.splice(2);

console.log(colors.green.bold("APassgen 1.0"))

var passwordTool = new apassgen.PasswordTool();
var newPassword = passwordTool.createSibling(args[0])
console.log(newPassword)