
///<reference path="../../../typings/colors.d.ts" />
///<reference path="../../../typings/node.d.ts" />

import colors = require('colors');
import apassgen = require('./apassgen')

var version:string = "0.1.6";
var args:string[] = process.argv.splice(2);


class QuoteObfuscationSource implements apassgen.ObfuscationSource {
    
    quoutes:Array<string>
    currentQuote:number = 0
    
    constructor(quotes:Array<string>) {
        this.quoutes = quotes  
    }
    
    next():string {
        
        if (this.currentQuote >= this.quoutes.length) {
            return null;
        }
        
        /*var quote = this.quoutes[this.currentQuote]
        console.log(quote)
        console.read
        */
        var quote = this.quoutes[this.currentQuote]
        this.currentQuote++
        return quote
        
    }
    
}

console.log(colors.green.bold("APassgen 1.0"))

var quotes = new Array<string>("aaa", "bbbb")

var passwordTool = new apassgen.PasswordTool();
var newPassword = passwordTool.createSibling(args[0], new QuoteObfuscationSource(quotes))
console.log(newPassword)

