
///<reference path="../../../typings/readline-sync.d.ts" />

import readline = require('readline-sync')

export class LineReader {
    readLine(question:string):string {
        return readline.question(question);
    }
}