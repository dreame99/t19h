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
var MainPage = /** @class */ (function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainPage.prototype.searchNewProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newProjectList, i;
            return __generator(this, function (_a) {
                newProjectList = [];
                /*
                await fetch(API_URL + "/projects", {
                    method: "POST",
                    body: JSON.stringify({date : "20231202"})
                })
                .then((response) => response.json())
                .then((result) => {
                    newProjectList = result;
                })
                .catch(e => console.log(e));
                */
                for (i = 0; i < 5; i++) {
                    newProjectList.push({
                        recruitStartDate: "20231115",
                        recruitEndDate: "20231215",
                        title: "팀원구함",
                        contents: "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br>".repeat(i * 2),
                        currentMember: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(42, i)),
                        additionalRecruitMember: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(53, i)),
                        skills: ["bootstrap", "mongodb", "figma", "github", "git", "html5", "java", "spring", "javascript", "typescript", "kotlin", "nodejs", "react", "vuejs"].slice(0, i),
                        watchCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(64, i)),
                        goodCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(75, i)),
                        mentionCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(86, i))
                    });
                }
                return [2 /*return*/, newProjectList];
            });
        });
    };
    MainPage.prototype.searchPopularProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var popularProjectList, i;
            return __generator(this, function (_a) {
                popularProjectList = [];
                /*
                await fetch(API_URL + "/projects", {
                    method: "POST",
                    body: JSON.stringify({type: "인기많은순"})
                })
                .then((response) => response.json())
                .then((result) => {
                    popularProjectList = result;
                })
                .catch(e => console.log(e));
                */
                for (i = 0; i < 15; i++) {
                    popularProjectList.push({
                        recruitStartDate: "20231115",
                        recruitEndDate: "20231215",
                        title: "팀원구함",
                        contents: "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br>".repeat(i),
                        currentMember: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(42, i)),
                        additionalRecruitMember: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(53, i)),
                        skills: ["bootstrap", "mongodb", "figma", "github", "git", "html5", "java", "spring", "javascript", "typescript", "kotlin", "nodejs", "react", "vuejs"].slice(0, i),
                        watchCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(64, i)),
                        goodCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(75, i)),
                        mentionCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(86, i))
                    });
                }
                return [2 /*return*/, popularProjectList];
            });
        });
    };
    MainPage.prototype.searchHighestScoreMemberList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var highestScoreMemberList, i;
            return __generator(this, function (_a) {
                highestScoreMemberList = [];
                /*
                await fetch(API_URL + "/projects", {
                    method: "POST",
                    body: JSON.stringify({type: "인기많은순"})
                })
                .then((response) => response.json())
                .then((result) => {
                    highestScoreMemberList = result;
                })
                .catch(e => console.log(e));
                */
                for (i = 0; i < 15; i++) {
                    highestScoreMemberList.push(1);
                }
                return [2 /*return*/, highestScoreMemberList];
            });
        });
    };
    MainPage.prototype.renderNewProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newProjectList, article, div, span, newProject, carousel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchNewProjectList()];
                    case 1:
                        newProjectList = _a.sent();
                        if (newProjectList.length) {
                            article = createElement("article");
                            div = createElement("div", "", "", "width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;");
                            article.appendChild(div);
                            span = createElement("span", "", "title");
                            span.innerHTML = "이달의 새로운 프로젝트";
                            div.appendChild(span);
                            newProject = createElement("article", "newProject", "", "width: 100%; margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;");
                            div.appendChild(newProject);
                            carousel = new Carousel();
                            newProject.appendChild(carousel.getElement());
                            newProjectList.forEach(function (newProject) { return carousel.append((new ProjectAbridgement(newProject)).getElement()); });
                            this.contents.appendChild(article);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MainPage.prototype.renderPopularProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var popularProjectList, article, div, span, popularProjectContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchPopularProjectList()];
                    case 1:
                        popularProjectList = _a.sent();
                        if (popularProjectList.length > 0) {
                            article = createElement("article");
                            div = createElement("div", "", "", "width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;");
                            article.appendChild(div);
                            span = createElement("span", "", "title");
                            span.innerHTML = "인기 프로젝트";
                            div.appendChild(span);
                            popularProjectContainer = createElement("article", "popularProject", "", "margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;");
                            div.appendChild(popularProjectContainer);
                            popularProjectList.forEach(function (popularProject) { return popularProjectContainer.append((new ProjectAbridgement(popularProject)).getElement()); });
                            this.contents.appendChild(article);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MainPage.prototype.renderHighesScoreMemberList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var highestScoreMemberList, article, div, span, highestScoreMember, carousel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchHighestScoreMemberList()];
                    case 1:
                        highestScoreMemberList = _a.sent();
                        if (highestScoreMemberList.length > 0) {
                            article = createElement("article");
                            div = createElement("div", "", "", "width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;");
                            article.appendChild(div);
                            span = createElement("span", "", "title");
                            span.innerHTML = "당신의 열정을 칭찬합니다.";
                            div.appendChild(span);
                            highestScoreMember = createElement("article", "highestScoreMember", "", "width: 100%; margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;");
                            div.appendChild(highestScoreMember);
                            carousel = new Carousel();
                            highestScoreMember.appendChild(carousel.getElement());
                            highestScoreMemberList.forEach(function (member) {
                                var div = document.createElement("div");
                                div.style.padding = "20px";
                                div.style.width = "200px";
                                div.style.height = "200px";
                                div.style.background = "white";
                                carousel.append(div);
                            });
                            this.contents.appendChild(article);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MainPage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.contents) return [3 /*break*/, 4];
                        this.contents.innerHTML = "";
                        return [4 /*yield*/, this.renderNewProjectList()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.renderPopularProjectList()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.renderHighesScoreMemberList()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MainPage.prototype.bindingEvents = function () {
    };
    return MainPage;
}(Page));
