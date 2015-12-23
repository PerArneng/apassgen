var PasswordTool = (function () {
    function PasswordTool() {
        this.charsLowerAlpha = new Array();
        this.charsUpperAlpha = new Array();
        this.charsNumerical = new Array();
        this.charsSpecial = new Array();
        for (var i = 97; i < 123; i++) {
            this.charsLowerAlpha.push(String.fromCharCode(i));
            this.charsUpperAlpha.push(String.fromCharCode(i - 32));
        }
        console.log(this.charsLowerAlpha);
        console.log(this.charsUpperAlpha);
        for (var i = 48; i < 58; i++) {
            this.charsNumerical.push(String.fromCharCode(i));
        }
        console.log(this.charsNumerical);
        for (var i = 32; i < 126; i++) {
            if (i > 96 && i < 123)
                continue;
            if (i > 64 && i < 91)
                continue;
            if (i > 47 && i < 58)
                continue;
            this.charsSpecial.push(String.fromCharCode(i));
        }
        console.log(this.charsSpecial);
    }
    PasswordTool.prototype.createSibling = function (password) {
        var length = password.length;
        return password;
    };
    return PasswordTool;
})();
exports.PasswordTool = PasswordTool;
