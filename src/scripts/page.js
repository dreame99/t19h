var Page = /** @class */ (function () {
    function Page(contents) {
        this.contents = contents;
    }
    Page.prototype.init = function () {
        this.render();
        this.bindingEvents();
    };
    return Page;
}());
