var PasswordTool = (function () {
    function PasswordTool() {
        this.charsLowerAlpha = new Array();
        this.charsUpperAlpha = new Array();
        this.charsNumerical = new Array();
        this.charsSpecial = new Array();
        this.charClasses = new Array();
        for (var i = 97; i < 123; i++) {
            this.charsLowerAlpha.push(String.fromCharCode(i));
            this.charsUpperAlpha.push(String.fromCharCode(i - 32));
        }
        for (var i = 48; i < 58; i++) {
            this.charsNumerical.push(String.fromCharCode(i));
        }
        for (var i = 32; i < 126; i++) {
            if (i > 96 && i < 123)
                continue;
            if (i > 64 && i < 91)
                continue;
            if (i > 47 && i < 58)
                continue;
            this.charsSpecial.push(String.fromCharCode(i));
        }
        this.charClasses.push(this.charsLowerAlpha);
        this.charClasses.push(this.charsUpperAlpha);
        this.charClasses.push(this.charsSpecial);
        this.charClasses.push(this.charsNumerical);
    }
    PasswordTool.prototype.createSibling = function (password) {
        var length = password.length;
        for (var _i = 0; _i < password.length; _i++) {
            var c = password[_i];
            var currentClass = this.charsLowerAlpha;
            for (var _a = 0, _b = this.charClasses; _a < _b.length; _a++) {
                var charClass = _b[_a];
                if (charClass.indexOf(c) > -1) {
                    currentClass = charClass;
                }
            }
            var newChar = currentClass[0];
            console.log(newChar);
            console.log(c);
        }
        return password;
    };
    return PasswordTool;
})();
exports.PasswordTool = PasswordTool;
