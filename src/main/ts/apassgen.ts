
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
        
    createSibling(password:string) : string {
        
        var length = password.length;
        
        for (var c of password) {
                       
            var currentClass = this.charsLowerAlpha;
          
            for (var charClass of this.charClasses) {
                if (charClass.indexOf(c) > -1) {
                    currentClass = charClass;
                }
            }
            
            var newChar = currentClass[0]
            
            console.log(newChar)
            console.log(c)
        }
        
        return password;
    }
       
}


