///<reference path="../../../typings/readline-sync.d.ts" />
var readline = require('readline-sync');
var LineReader = (function () {
    function LineReader() {
    }
    LineReader.prototype.readLine = function (question) {
        return readline.question(question);
    };
    return LineReader;
})();
exports.LineReader = LineReader;
