
///<reference path="../../../typings/node.d.ts" />
import crypto = require('crypto')

export interface ObfuscationSource {
    next():string
}

export class PasswordTool {
           
    charsLowerAlpha:Array<string> = new Array<string>();    
    charsUpperAlpha:Array<string> = new Array<string>();    
    charsNumerical:Array<string> = new Array<string>();    
    charsSpecial:Array<string> = new Array<string>();     
    
    charClasses:Array<Array<string>> = new Array<Array<string>>();
    
    constructor() {
        
        for (var i=97;i<123;i++) {
            this.charsLowerAlpha.push(String.fromCharCode(i))
            this.charsUpperAlpha.push(String.fromCharCode(i-32))   
        }
                
        for (var i=48;i<58;i++) {
            this.charsNumerical.push(String.fromCharCode(i))
        }
        
        for (var i=32;i<126;i++) {
            if (i>96 && i<123) continue;
            if (i>64 && i<91) continue;
            if (i>47 && i<58) continue;
            this.charsSpecial.push(String.fromCharCode(i))
        }
        
        this.charClasses.push(this.charsLowerAlpha)
        this.charClasses.push(this.charsUpperAlpha)
        this.charClasses.push(this.charsSpecial)
        this.charClasses.push(this.charsNumerical)
    }
        
    createSibling(password:string, obfuscationSource:ObfuscationSource) : string {
        
        var charClassesToUse = PasswordTool.getCharClasses(password, this.charClasses)
        
        
        PasswordTool.obfuscate(password, obfuscationSource)
        
        var newPassword = ""
        for (var i=0;i<password.length;i++) {
            newPassword = newPassword + charClassesToUse[i][0]
        }
        
        console.log(newPassword)
        
        return password
    }
    
    static md5(str:string, key:string) {
        var md5 = crypto.createHash("sha256")
        md5.update(str + key, "utf8")
        return md5.digest("hex")
    }
    
    static encrypt(str:string, key:string):string {
        var crypt = crypto.createCipher("aes192", key)
        crypt.update(str)
        return crypt.final("hex")
    }
    
    static obfuscate(str:string, obfuscationSource:ObfuscationSource):string {

        var obfuscated = str;
        while (true) {
            var key = obfuscationSource.next()
            if (key == null) break
            obfuscated = PasswordTool.md5(obfuscated, key)
            obfuscated = PasswordTool.encrypt(obfuscated, key)
        }
        
        return obfuscated
    }
    
    static getCharClasses(str:string, availableCharClasses:Array<Array<string>>): Array<Array<string>> {
        var charClassesToUse = new Array<Array<string>>()
        
        return str.split("").map(c => PasswordTool.classifyChar(c, availableCharClasses))
    }
    
    static classifyChar(chr:string, availableCharClasses:Array<Array<string>>) : Array<string> {
        var currentClass = availableCharClasses[0]

        for (var charClass of availableCharClasses) {
            if (charClass.indexOf(chr) > -1) {
                currentClass = charClass
            }
        }
        return currentClass
    }
    
       
}


