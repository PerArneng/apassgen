var apassgen;
(function (apassgen) {
    var PasswordTools = (function () {
        function PasswordTools() {
        }
        PasswordTools.createSibling = function (password) {
            return password;
        };
        return PasswordTools;
    })();
    apassgen.PasswordTools = PasswordTools;
})(apassgen || (apassgen = {}));
