var Main = /** @class */ (function () {
    function Main(container) {
        this.container = document.getElementById(container);
    }
    Main.prototype.updateContents = function () {
        if (this.container) {
            this.container.innerHTML = "";
        }
    };
    Main.prototype.init = function () {
        this.updateContents();
    };
    return Main;
}());
