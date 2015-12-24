///<reference path="../../../typings/node.d.ts" />
var crypto = require('crypto');
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
    PasswordTool.prototype.createSibling = function (password, obfuscationSource) {
        var charClassesToUse = PasswordTool.getCharClasses(password, this.charClasses);
        PasswordTool.obfuscate(password, obfuscationSource);
        var newPassword = "";
        for (var i = 0; i < password.length; i++) {
            newPassword = newPassword + charClassesToUse[i][0];
        }
        console.log(newPassword);
        return password;
    };
    PasswordTool.md5 = function (str, key) {
        var md5 = crypto.createHash("sha256");
        md5.update(str + key, "utf8");
        return md5.digest("hex");
    };
    PasswordTool.encrypt = function (str, key) {
        var crypt = crypto.createCipher("aes192", key);
        crypt.update(str);
        return crypt.final("hex");
    };
    PasswordTool.obfuscate = function (str, obfuscationSource) {
        var obfuscated = str;
        while (true) {
            var key = obfuscationSource.next();
            if (key == null)
                break;
            obfuscated = PasswordTool.md5(obfuscated, key);
            obfuscated = PasswordTool.encrypt(obfuscated, key);
            console.log(obfuscated);
        }
        return obfuscated;
    };
    PasswordTool.getCharClasses = function (str, availableCharClasses) {
        var charClassesToUse = new Array();
        return str.split("").map(function (c) { return PasswordTool.classifyChar(c, availableCharClasses); });
    };
    PasswordTool.classifyChar = function (chr, availableCharClasses) {
        var currentClass = availableCharClasses[0];
        for (var _i = 0; _i < availableCharClasses.length; _i++) {
            var charClass = availableCharClasses[_i];
            if (charClass.indexOf(chr) > -1) {
                currentClass = charClass;
            }
        }
        return currentClass;
    };
    return PasswordTool;
})();
exports.PasswordTool = PasswordTool;
