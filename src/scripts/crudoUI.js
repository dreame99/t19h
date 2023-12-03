// carousel
var Carousel = /** @class */ (function () {
    function Carousel() {
        this.carousel = document.createElement("article");
        this.list = document.createElement("div");
        this.x = 0;
        this.carousel.classList.add("carousel");
        this.list.classList.add("list");
        this.carousel.appendChild(this.list);
    }
    Carousel.prototype.render = function (container) {
        container.appendChild(this.carousel);
    };
    Carousel.prototype.append = function (child) {
        this.list.appendChild(child);
    };
    Carousel.prototype.remove = function (child) {
        this.list.removeChild(child);
    };
    Carousel.prototype.getElement = function () {
        return this.carousel;
    };
    Carousel.prototype.run = function (on) {
        var _this = this;
        if (on) {
            var lastChild = this.list.lastChild;
            if (lastChild && this.carousel.clientWidth < lastChild.getBoundingClientRect().x + lastChild.getBoundingClientRect().width) {
                var speed = 0.2;
                this.running = setInterval(function () {
                    _this.x -= speed;
                    _this.list.style.transform = "translateX(".concat(_this.x, "%)");
                    Array.from(_this.list.children).forEach(function (child) {
                        if (-child.getBoundingClientRect().x >= child.getBoundingClientRect().width) {
                            _this.x += (child.getBoundingClientRect().width + 20) / _this.list.getBoundingClientRect().width * 100;
                            _this.list.style.transform = "translateX(".concat(_this.x, "%)");
                            _this.list.removeChild(child);
                            _this.list.appendChild(child);
                        }
                    });
                }, 16);
            }
        }
        else {
            clearInterval(this.running);
            this.running = undefined;
        }
    };
    Carousel.prototype.isRunning = function () {
        return this.running != undefined;
    };
    return Carousel;
}());
// always visible header
// layer popup
// move usign drag
