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
var MainPage = /** @class */ (function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PAGE_COUNT = 9;
        return _this;
    }
    MainPage.prototype.searchLatestProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var date, y, m, cond, projectList;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        y = "" + date.getFullYear();
                        m = "" + (date.getMonth() + 1);
                        m = (Number(m) < 10 ? "0" + m : m);
                        cond = "count=" + this.PAGE_COUNT + "&start=" + (y + "-" + m + "-01") + "&end=" + (y + "-" + m + "-31");
                        projectList = [];
                        return [4 /*yield*/, getFetch("projects", cond).then(function (result) {
                                if (result.result.code == 104) {
                                    projectList = result.data;
                                }
                                else {
                                    alert(API_RESULT_CODE[result.result.code]);
                                }
                            }).catch(function (e) {
                                for (var i = 0; i < _this.PAGE_COUNT; i++) {
                                    projectList.push({
                                        id: "" + (Math.random() * 1000000 | 0),
                                        teamRecruitmentStartDate: "2023-11-15",
                                        teamRecruitmentEndDate: "2023-12-15",
                                        title: "팀원구함",
                                        content: "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br>".repeat(i * 2),
                                        personnel: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i)),
                                        skills: [{ name: "bootstrap", image: "skills/bootstrap-original.png" }, { name: "figma", image: "skills/figma-original.png" }, { name: "mongodb", image: "mongodb-original.png" }].slice(0, i),
                                        countViews: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(12, i)),
                                        countGreats: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(6, i)),
                                        countComments: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i))
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, projectList];
                }
            });
        });
    };
    MainPage.prototype.updateLatestProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var projectCarousel, projectList, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        projectCarousel = document.querySelector("#projectCarousel");
                        return [4 /*yield*/, this.searchLatestProjectList()];
                    case 1:
                        projectList = _a.sent();
                        if (projectCarousel) {
                            html = "";
                            projectList.forEach(function (project) {
                                var skillListHtml = "";
                                project.skills.forEach(function (skill) { return skillListHtml += getSkillCardElement(skill); });
                                html += getProjectCardElement(project, skillListHtml);
                            });
                            projectCarousel.innerHTML = html;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MainPage.prototype.searchBestProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cond, projectList;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cond = "count=" + this.PAGE_COUNT + "&sort=best";
                        projectList = [];
                        return [4 /*yield*/, getFetch("projects", cond).then(function (result) {
                                if (result.result.code == 104) {
                                    projectList = result.data;
                                }
                                else {
                                    alert(API_RESULT_CODE[result.result.code]);
                                }
                            }).catch(function (e) {
                                for (var i = 0; i < _this.PAGE_COUNT; i++) {
                                    projectList.push({
                                        id: "" + (Math.random() * 1000000 | 0),
                                        teamRecruitmentStartDate: "2023-11-15",
                                        teamRecruitmentEndDate: "2023-12-15",
                                        title: "팀원구함",
                                        content: "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br>".repeat(i * 2),
                                        personnel: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i)),
                                        skills: [{ name: "bootstrap", image: "skills/bootstrap-original.png" }, { name: "figma", image: "skills/figma-original.png" }, { name: "mongodb", image: "mongodb-original.png" }].slice(0, i),
                                        countViews: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(12, i)),
                                        countGreats: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(6, i)),
                                        countComments: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i))
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, projectList];
                }
            });
        });
    };
    MainPage.prototype.updateBestProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bestProjectContainer, projectList, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bestProjectContainer = document.querySelector("#bestProjectContainer");
                        return [4 /*yield*/, this.searchBestProjectList()];
                    case 1:
                        projectList = _a.sent();
                        if (bestProjectContainer) {
                            html = "";
                            projectList.forEach(function (project) {
                                var skillListHtml = "";
                                project.skills.forEach(function (skill) { return skillListHtml += getSkillCardElement(skill); });
                                html += getProjectCardElement(project, skillListHtml);
                            });
                            bestProjectContainer.innerHTML = html;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MainPage.prototype.searchUserList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cond, userList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cond = "count=" + this.PAGE_COUNT + "&sort=score";
                        userList = [];
                        return [4 /*yield*/, getFetch("users", cond).then(function (result) {
                                if (result.result.code == 104) {
                                    userList = result.data;
                                }
                                else {
                                    alert(API_RESULT_CODE[result.result.code]);
                                }
                            })
                                .catch(function (e) { return alert("error msg : " + e); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, userList];
                }
            });
        });
    };
    MainPage.prototype.updateUserList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userCarousel, userList, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userCarousel = document.querySelector("#userCarousel");
                        return [4 /*yield*/, this.searchUserList()];
                    case 1:
                        userList = _a.sent();
                        if (userCarousel) {
                            html = "";
                            userList.forEach(function (user) { return html += getUserCardElement(user); });
                            userCarousel.innerHTML = html;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MainPage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.contents) {
                    this.contents.innerHTML = "\n                <section class=\"container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10\" style=\"overflow: hidden;\">\n                    <article class=\"row-middle-stretch-flex-layout\">\n                        <h1 class=\"title-text bold-text\">\uC774\uBC88\uB2EC\uC5D0 \uC0C8\uB85C \uB4F1\uB85D\uB41C \uD504\uB85C\uC81D\uD2B8\uB4E4\uC774\uC5D0\uC694</h1>\n                    </article>\n        \n                    <article id=\"projectContainer\">\n                        <article id=\"projectCarousel\" class=\"row-top-left-flex-layout gap-level-8 item-3-layout\" data-name=\"carousel\">\n                        </article>\n                    </article>\n                </section>\n        \n                <section class=\"container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10\">\n                    <article class=\"row-middle-stretch-flex-layout\">\n                        <h1 class=\"title-text bold-text\">\uC778\uAE30 \uB9CE\uC740 \uD504\uB85C\uC81D\uD2B8\uB4E4\uC774\uC5D0\uC694</h1>\n                    </article>\n        \n                    <article id=\"bestProjectContainer\" class=\"row-top-left-flex-layout gap-level-8 wrap item-3-layout\">\n                    </article>\n                </section>\n        \n                <section class=\"container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10\" style=\"overflow: hidden;\">\n                    <article class=\"row-middle-stretch-flex-layout\">\n                        <h1 class=\"title-text bold-text\">\uB2F9\uC2E0\uC758 \uC5F4\uC815\uC744 \uCE6D\uCC2C\uD569\uB2C8\uB2E4</h1>\n                    </article>\n        \n                    <article id=\"userContainer\">\n                        <article id=\"userCarousel\" class=\"row-top-left-flex-layout gap-level-8 item-5-layout\" data-name=\"carousel\">\n                        </article>\n                    </article>\n                </section>";
                    this.updateLatestProjectList();
                    this.updateBestProjectList();
                }
                return [2 /*return*/];
            });
        });
    };
    MainPage.prototype.bindingEvents = function () {
        var projectContainer = document.querySelector("#projectContainer");
        var projectCarousel = document.querySelector("#projectCarousel");
        var userContainer = document.querySelector("#userContainer");
        var userCarousel = document.querySelector("#userCarousel");
        var originX;
        var prevX;
        var isProjectDrag = false;
        var isUserDrag = false;
        projectCarousel === null || projectCarousel === void 0 ? void 0 : projectCarousel.addEventListener("mousedown", function (e) {
            if (projectCarousel && projectContainer) {
                isProjectDrag = true;
                originX = projectCarousel.getBoundingClientRect().x - projectContainer.getBoundingClientRect().x;
                prevX = e.clientX;
            }
        });
        userCarousel === null || userCarousel === void 0 ? void 0 : userCarousel.addEventListener("mousedown", function (e) {
            if (userCarousel && userContainer) {
                isUserDrag = true;
                originX = userCarousel.getBoundingClientRect().x - userContainer.getBoundingClientRect().x;
                prevX = e.clientX;
            }
        });
        window.addEventListener("mousemove", function (e) {
            if (isProjectDrag) {
                if (projectCarousel && projectContainer) {
                    var gap = 32;
                    var itemWidth = (projectContainer.getBoundingClientRect().width - gap * 2) / 3;
                    var listWidth = Math.max(0, projectCarousel.children.length - 1) * gap + projectCarousel.children.length * itemWidth;
                    projectCarousel.style.left = Math.min(0, Math.max(-(listWidth - projectCarousel.clientWidth), originX + e.clientX - prevX)) + "px";
                }
            }
            if (isUserDrag) {
                if (userCarousel && userContainer) {
                    var gap = 32;
                    var itemWidth = 200;
                    var listWidth = Math.max(0, userCarousel.children.length - 1) * gap + userCarousel.children.length * itemWidth;
                    userCarousel.style.left = Math.min(0, Math.max(-(listWidth - userCarousel.clientWidth), originX + e.clientX - prevX)) + "px";
                }
            }
        });
        window.addEventListener("mouseup", function (e) {
            isProjectDrag = false;
            isUserDrag = false;
        });
    };
    return MainPage;
}(Page));
