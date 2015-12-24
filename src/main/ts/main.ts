
///<reference path="../../../typings/colors.d.ts" />
///<reference path="../../../typings/node.d.ts" />

import colors = require('colors');
import apassgen = require('./apassgen')
import io = require('./io')
import quotes = require('./quotes')

var version:string = "0.1.6";
var args:string[] = process.argv.splice(2);


class QuoteObfuscationSource implements apassgen.ObfuscationSource {
    
    quoutes:Array<quotes.Quote>
    currentQuote:number = 0
    lineReader:io.LineReader
    
    constructor(quotes:Array<quotes.Quote>, lineReader:io.LineReader) {
        this.quoutes = quotes
        this.lineReader = lineReader
    }
    
    next():string {
        
        if (this.currentQuote >= this.quoutes.length) {
            return null;
        }
        
        var quote = this.quoutes[this.currentQuote]
        console.log(quote.quote)
        var answer:string;
        while (true) {
            answer = this.lineReader.readLine(quote.question)
            if (answer === quote.correctAnswer) break;
        }
        
        this.currentQuote++
        return answer
        
    }
    
}



console.log(colors.green.bold("APassgen 1.0"))

var quoteList = new Array<quotes.Quote>()
quoteList.push(new quotes.Quote("A picture says more etc", "last word?", "etc"))

var lineReader = new io.LineReader()

var passwordTool = new apassgen.PasswordTool()

var newPassword = passwordTool.createSibling(
                                args[0], 
                                new QuoteObfuscationSource(quoteList, lineReader))

console.log(newPassword)

