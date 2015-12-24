///<reference path="../../../typings/colors.d.ts" />
///<reference path="../../../typings/node.d.ts" />
var colors = require('colors');
var apassgen = require('./apassgen');
var io = require('./io');
var quotes = require('./quotes');
var version = "0.1.6";
var args = process.argv.splice(2);
var QuoteObfuscationSource = (function () {
    function QuoteObfuscationSource(quotes, lineReader) {
        this.currentQuote = 0;
        this.quoutes = quotes;
        this.lineReader = lineReader;
    }
    QuoteObfuscationSource.prototype.next = function () {
        if (this.currentQuote >= this.quoutes.length) {
            return null;
        }
        var quote = this.quoutes[this.currentQuote];
        console.log(quote.quote);
        var answer;
        while (true) {
            answer = this.lineReader.readLine(quote.question);
            if (answer === quote.correctAnswer)
                break;
        }
        this.currentQuote++;
        return answer;
    };
    return QuoteObfuscationSource;
})();
console.log(colors.green.bold("APassgen 1.0"));
var quoteList = new Array();
quoteList.push(new quotes.Quote("A picture says more etc", "last word?", "etc"));
var lineReader = new io.LineReader();
var passwordTool = new apassgen.PasswordTool();
var newPassword = passwordTool.createSibling(args[0], new QuoteObfuscationSource(quoteList, lineReader));
console.log(newPassword);
