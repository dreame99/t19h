var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * carousel element.
 * rotating slide.
 */
var Carousel = /** @class */ (function () {
    function Carousel() {
        var _this = this;
        this.carousel = document.createElement("article");
        this.list = document.createElement("div");
        this.x = 0;
        this.isDrag = false;
        this.gap = 20;
        this.carousel.classList.add("carousel");
        this.list.classList.add("list");
        this.carousel.appendChild(this.list);
        var originX;
        var prevX;
        this.carousel.addEventListener("mousedown", function (e) {
            console.log("mousedown");
            _this.isDrag = true;
            originX = _this.x;
            prevX = e.clientX;
        });
        window.addEventListener("mousemove", function (e) {
            if (_this.isDrag) {
                console.log("mousemove");
                _this.move(originX + e.clientX - prevX);
                originX += _this.updateItem();
            }
        });
        window.addEventListener("mouseup", function () {
            console.log("mouseup");
            _this.isDrag = false;
        });
        //this.play();
    }
    Carousel.prototype.getAllItem = function () {
        return __spreadArray([], this.list.children, true);
    };
    Carousel.prototype.getItem = function (idx) {
        return this.list.children[Math.min(this.list.children.length - 1, Math.max(0, idx))];
    };
    Carousel.prototype.getFirstItem = function () {
        return this.getItem(0);
    };
    Carousel.prototype.getLastItem = function () {
        return this.getItem(this.getAllItem().length - 1);
    };
    Carousel.prototype.getPrevItem = function () {
        var prevItem = null;
        for (var i = 0; i < this.getAllItem().length; i++) {
            var item = this.getItem(i);
            if (item.getBoundingClientRect().x - this.carousel.getBoundingClientRect().x >= 0) {
                prevItem = this.getItem(i - 1);
                break;
            }
        }
        return prevItem;
    };
    Carousel.prototype.getNextItem = function () {
        var nextItem = null;
        for (var i = this.getAllItem().length - 1; i >= 0; i--) {
            var item = this.getItem(i);
            if (item.getBoundingClientRect().x + item.clientWidth <= this.carousel.getBoundingClientRect().x + this.carousel.clientWidth) {
                nextItem = this.getItem(i - 1);
                break;
            }
        }
        return nextItem;
    };
    Carousel.prototype.isFlood = function () {
        var first = this.getFirstItem();
        var last = this.getLastItem();
        if (first && last) {
            return last.getBoundingClientRect().x + last.clientWidth - first.getBoundingClientRect().x > this.carousel.clientWidth;
        }
        return false;
    };
    Carousel.prototype.move = function (value) {
        this.list.style.transform = "translateX(".concat(this.x = value, "px)");
    };
    Carousel.prototype.updateItem = function () {
        var first = this.getFirstItem();
        var last = this.getLastItem();
        var moveX = 0;
        if (this.isFlood() && first && last) {
            if (this.x >= 0) {
                moveX = -(last.clientWidth + this.gap);
                this.list.insertBefore(last.cloneNode(true), first);
                this.list.removeChild(last);
            }
            else if (last.getBoundingClientRect().x + last.clientWidth <= this.carousel.getBoundingClientRect().x + this.carousel.clientWidth) {
                moveX = last.clientWidth + this.gap;
                this.list.appendChild(first.cloneNode(true));
                this.list.removeChild(first);
            }
            this.move(this.x + moveX);
        }
        return moveX;
    };
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
    Carousel.prototype.isRunning = function () {
        return this.running != undefined;
    };
    Carousel.prototype.play = function () {
        var _this = this;
        if (!this.running) {
            this.running = setInterval(function () {
                _this.move(_this.x - 1);
                _this.updateItem();
            }, 1);
        }
    };
    Carousel.prototype.stop = function () {
        clearInterval(this.running);
        this.running = undefined;
    };
    return Carousel;
}());
/**
 * Create page container elements based on the total number and the number of displays on a page
 */
var PageContainer = /** @class */ (function () {
    function PageContainer(callback) {
        var _this = this;
        this.pageContainer = document.createElement("article");
        this.leftButton = document.createElement("button");
        this.rightButton = document.createElement("button");
        this.totalCount = 90;
        this.pageCount = 9;
        this.maxPage = 10;
        this.phase = 1;
        this.selectedPos = 1;
        this.callback = callback;
        this.pageContainer.classList.add("page-container");
        this.leftButton.classList.add("left-button");
        this.leftButton.innerHTML = "\n            <svg viewBox=\"0 0 24 24\">\n                <path d=\"M17 4 L7 12 L17 20\"></path>\n            </svg>\n        ";
        this.leftButton.onclick = function () { return _this.updatePage(_this.phase - 1); };
        this.pageContainer.appendChild(this.leftButton);
        this.rightButton.classList.add("right-button");
        this.rightButton.innerHTML = "\n            <svg viewBox=\"0 0 24 24\">\n                <path d=\"M7 4 L17 12 L7 20\"></path>\n            </svg>\n        ";
        this.rightButton.onclick = function () { return _this.updatePage(_this.phase + 1); };
        this.pageContainer.appendChild(this.rightButton);
        this.updatePage(this.phase);
    }
    PageContainer.prototype.setTotalCount = function (totalCount) {
        this.totalCount = Math.max(1, totalCount);
        this.updatePage(this.phase);
    };
    PageContainer.prototype.setPageCount = function (pageCount) {
        this.pageCount = Math.max(1, pageCount);
        this.updatePage(this.phase);
    };
    PageContainer.prototype.getPage = function () {
        return this.page;
    };
    PageContainer.prototype.updatePage = function (phase) {
        var _this = this;
        var maxPhase = Math.max(1, Math.ceil(this.totalCount / this.pageCount / this.maxPage));
        this.phase = Math.max(1, Math.min(maxPhase, phase));
        __spreadArray([], this.pageContainer.getElementsByClassName("page-count"), true).forEach(function (pageCount) {
            pageCount.remove();
        });
        var count = Math.min(this.maxPage, this.totalCount / this.pageCount - (this.phase - 1) * this.maxPage);
        var _loop_1 = function () {
            var page = document.createElement("div");
            page.classList.add("page-count");
            page.innerHTML = "" + (i + 1 + (this_1.phase - 1) * this_1.maxPage);
            this_1.pageContainer.insertBefore(page, this_1.rightButton);
            page.addEventListener("click", function () {
                if (!Number.isNaN(Number(page.innerHTML))) {
                    var pageNum = Number(page.innerHTML);
                    __spreadArray([], _this.pageContainer.getElementsByClassName("page-count"), true).forEach(function (pageCount) { return pageCount.classList.remove("selected"); });
                    page.classList.add("selected");
                    _this.selectedPos = pageNum - (_this.phase - 1) * _this.maxPage;
                    _this.page = pageNum;
                    if (_this.callback) {
                        _this.callback(_this.page);
                    }
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < count; i++) {
            _loop_1();
        }
        if (typeof this.selectedPos == "number") {
            var selectedPageElems = this.pageContainer.getElementsByClassName("page-count");
            var selectedPageElem = selectedPageElems[Math.min(this.selectedPos, selectedPageElems.length) - 1];
            selectedPageElem === null || selectedPageElem === void 0 ? void 0 : selectedPageElem.classList.add("selected");
        }
    };
    PageContainer.prototype.getElement = function () {
        return this.pageContainer;
    };
    return PageContainer;
}());
// always visible header
// layer popup
// move usign drag
