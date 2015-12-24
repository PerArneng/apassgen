///<reference path="../../../typings/colors.d.ts" />
///<reference path="../../../typings/node.d.ts" />
var colors = require('colors');
var apassgen = require('./apassgen');
var version = "0.1.6";
var args = process.argv.splice(2);
var QuoteObfuscationSource = (function () {
    function QuoteObfuscationSource(quotes) {
        this.currentQuote = 0;
        this.quoutes = quotes;
    }
    QuoteObfuscationSource.prototype.next = function () {
        if (this.currentQuote >= this.quoutes.length) {
            return null;
        }
        /*var quote = this.quoutes[this.currentQuote]
        console.log(quote)
        console.read
        */
        var quote = this.quoutes[this.currentQuote];
        this.currentQuote++;
        return quote;
    };
    return QuoteObfuscationSource;
})();
console.log(colors.green.bold("APassgen 1.0"));
var quotes = new Array("aaa", "bbbb");
var passwordTool = new apassgen.PasswordTool();
var newPassword = passwordTool.createSibling(args[0], new QuoteObfuscationSource(quotes));
console.log(newPassword);
