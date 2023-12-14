var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var UserListPage = /** @class */ (function (_super) {
    __extends(UserListPage, _super);
    function UserListPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PAGE_COUNT = 10;
        _this.MAX_PAGE = 10;
        _this.currentPage = 1;
        _this.phase = 1;
        _this.maxPhase = 1;
        _this.selectedPos = 1;
        return _this;
    }
    UserListPage.prototype.searchUserList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cond, sort, userList;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cond = "count=" + this.PAGE_COUNT + "&page=" + this.currentPage;
                        sort = document.querySelector("#sort");
                        if (sort) {
                            cond += "&sort=" + sort.dataset.name;
                        }
                        userList = [];
                        return [4 /*yield*/, getFetch("users", cond).then(function (result) {
                                var _a;
                                if (result.result.code == 104) {
                                    userList = result.data;
                                    _this.totalCount = (_a = result.option) === null || _a === void 0 ? void 0 : _a.listCount;
                                    _this.updatePageCount();
                                }
                                else {
                                    alert(API_RESULT_CODE[result.result.code]);
                                }
                            }).catch(function (e) {
                                for (var i = 0; i < _this.PAGE_COUNT; i++) {
                                    userList.push({
                                        id: "z" + ("a" + i).repeat(i),
                                        name: "내가세상가장매콤한사나이",
                                        imagePath: "./src/assets/images/avatar" + (((Math.random() * 10) | 0) + 1) + ".png",
                                        point: Math.pow(10, 10 - i)
                                    });
                                }
                                _this.totalCount = 100;
                                _this.updatePageCount();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, userList];
                }
            });
        });
    };
    UserListPage.prototype.updatePageCount = function () {
        console.log("totalCount", this.totalCount);
        if (this.totalCount) {
            var totalPage = Math.ceil(this.totalCount / this.PAGE_COUNT);
            console.log("maxPage", totalPage);
            this.currentPage = Math.min(totalPage, (this.phase - 1) * this.MAX_PAGE + this.selectedPos);
            this.maxPhase = Math.max(1, Math.ceil(totalPage / 10));
            console.log("currentPage", this.currentPage);
            console.log("maxPhase", this.maxPhase);
            var count = Math.min(this.MAX_PAGE, totalPage - (this.phase - 1) * this.MAX_PAGE);
            var pageContainer = document.querySelector("#pageContainer");
            if (pageContainer) {
                var html = "";
                for (var i = 1; i <= count; i++) {
                    var textClass = "";
                    if (i == this.currentPage - (this.phase - 1) * this.MAX_PAGE || i == count && i < this.currentPage - (this.phase - 1) * this.MAX_PAGE) {
                        textClass = "highlight-text";
                    }
                    html += "<span class=\"padding-level-3 clickable ".concat(textClass, "\">").concat(i + (this.phase - 1) * this.MAX_PAGE, "</span>");
                }
                pageContainer.innerHTML = html;
            }
        }
    };
    UserListPage.prototype.updateUserList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userContainer, userList, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userContainer = document.querySelector("#userContainer");
                        return [4 /*yield*/, this.searchUserList()];
                    case 1:
                        userList = _a.sent();
                        if (userContainer) {
                            html = "";
                            userList.forEach(function (user) {
                                html += "\n                    <div class=\"column-top-center-flex-layout gap-level-4\" data-name=\"userCard\" onclick=\"UserListPage.openUserDetail(this)\">\n                        <div class=\"column-top-center-flex-layout\">\n                            <span data-name=\"userId\" style=\"display: none;\">".concat(user.id, "</span>\n                            <span class=\"filled round horsetail padding-level-3\">").concat(user.point.toLocaleString(), "\uC810</span>\n                            <img class=\"bordered round\" src=\"./src/assets/images/avatars/avatar-2.png\" style=\"width: 200px; height: 200px;\">\n                        </div>\n                        <span>").concat(user.name, "</span>\n                    </div>");
                            });
                            userContainer.innerHTML = html;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserListPage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.contents) {
                    this.contents.innerHTML = "\n                <section class=\"container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10\">\n                    <article class=\"row-middle-stretch-flex-layout\">\n                        <h1 class=\"title-text bold-text\">\uC0AC\uC6A9\uC790 \uBAA9\uB85D</h1>\n                        <div class=\"row-middle-right-flex-layout\" style=\"position: relative;\">\n                            <div id=\"sortDropDown\" class=\"row-middle-left-flex-layout clickable\">\n                                <span id=\"sort\" data-name=\"latest\">\uCD5C\uC2E0\uC21C</span>\n                                <button class=\"icon-button transparent-button\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"bottom-icon\"/> </svg> </button>\n                            </div>\n                            \n                            <ul id=\"sortMenu\" class=\"box-layout\" style=\"position: absolute; top: 100%; left: 0; width: 100%; display: none;\">\n                                <li class=\"padding-level-4 clickable\" data-name=\"latest\">\uCD5C\uC2E0\uC21C</li>\n                                <li class=\"padding-level-4 clickable\" data-name=\"best\">\uC810\uC218\uB192\uC740\uC21C</li>\n                            </ul>\n                        </div>\n                    </article>\n        \n                    <article id=\"userContainer\" class=\"row-top-left-flex-layout gap-level-8 item-5-layout wrap\">\n                    </article>\n        \n                    <article class=\"row-middle-center-flex-layout\">\n                        <button id=\"prevPageButton\" class=\"icon-button transparent-button\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"left-icon\"/> </svg> </button>\n                        <div id=\"pageContainer\" class=\"row-middle-center-flex-layout\">\n                        </div>\n                        <button id=\"nextPageButton\" class=\"icon-button transparent-button\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"right-icon\"/> </svg> </button>\n                    </article>\n                </section>";
                    this.updateUserList();
                }
                return [2 /*return*/];
            });
        });
    };
    UserListPage.prototype.bindingEvents = function () {
        var _this = this;
        var sort = document.querySelector("#sort");
        var sortDropDown = document.querySelector("#sortDropDown");
        var sortMenu = document.querySelector("#sortMenu");
        var prevPageButton = document.querySelector("#prevPageButton");
        var nextPageButton = document.querySelector("#nextPageButton");
        var pageContainer = document.querySelector("#pageContainer");
        sortDropDown === null || sortDropDown === void 0 ? void 0 : sortDropDown.addEventListener("click", function () {
            if (sortMenu) {
                sortMenu.style.display = sortMenu.style.display == "none" ? "block" : "none";
            }
        });
        sortMenu === null || sortMenu === void 0 ? void 0 : sortMenu.addEventListener("click", function (e) {
            var target = e.target;
            if (sort && target) {
                sort.innerText = target.innerText;
                sort.dataset.name = target.dataset.name;
                if (sortMenu) {
                    sortMenu.style.display = "none";
                }
                _this.updateUserList();
            }
        });
        prevPageButton === null || prevPageButton === void 0 ? void 0 : prevPageButton.addEventListener("click", function () {
            _this.phase = Math.min(_this.maxPhase, _this.phase - 1);
            _this.updateUserList();
        });
        nextPageButton === null || nextPageButton === void 0 ? void 0 : nextPageButton.addEventListener("click", function () {
            _this.phase = Math.min(_this.maxPhase, _this.phase + 1);
            _this.updateUserList();
        });
        pageContainer === null || pageContainer === void 0 ? void 0 : pageContainer.addEventListener("click", function (e) {
            var target = e.target;
            if (target) {
                pageContainer === null || pageContainer === void 0 ? void 0 : pageContainer.querySelectorAll("span").forEach(function (page, i) {
                    if (page == target) {
                        _this.selectedPos = i + 1;
                        _this.updateUserList();
                    }
                });
            }
        });
    };
    UserListPage.openUserDetail = function (userCard) {
        var _a;
        var userId = (_a = userCard.querySelector("[data-name=userId]")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        if (userId) {
            console.log(userId);
            //navigate("profile", {userId});
            navigate("profile");
        }
    };
    return UserListPage;
}(Page));
