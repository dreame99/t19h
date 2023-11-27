var MainPage = /** @class */ (function () {
    function MainPage(container) {
        this.container = document.getElementById(container);
    }
    MainPage.prototype.render = function () {
        if (this.container) {
            this.container.innerHTML = "";
        }
    };
    MainPage.prototype.init = function () {
        this.render();
    };
    return MainPage;
}());
