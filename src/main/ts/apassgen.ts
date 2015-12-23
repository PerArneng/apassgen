
export class PasswordTool {
        
    charsLowerAlpha:Array<string> = new Array<string>();    
    charsUpperAlpha:Array<string> = new Array<string>();    
    charsNumerical:Array<string> = new Array<string>();    
    charsSpecial:Array<string> = new Array<string>();     
    
    constructor() {
        
        for (var i=97;i<123;i++) {
            this.charsLowerAlpha.push(String.fromCharCode(i))
            this.charsUpperAlpha.push(String.fromCharCode(i-32))
            
        }
        console.log(this.charsLowerAlpha)
        console.log(this.charsUpperAlpha)
                
        for (var i=48;i<58;i++) {
            this.charsNumerical.push(String.fromCharCode(i))
        }
        console.log(this.charsNumerical)

        for (var i=32;i<126;i++) {
            if (i>96 && i<123) continue;
            if (i>64 && i<91) continue;
            if (i>47 && i<58) continue;
            this.charsSpecial.push(String.fromCharCode(i))
        }
        console.log(this.charsSpecial)
        
    }
        
    createSibling(password:string) : string {
        
        var length = password.length;
        
        
        return password;
    }
       
}

