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
var ProjectListPage = /** @class */ (function (_super) {
    __extends(ProjectListPage, _super);
    function ProjectListPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PAGE_COUNT = 9;
        _this.MAX_PAGE = 10;
        _this.currentPage = 1;
        _this.phase = 1;
        _this.maxPhase = 1;
        _this.selectedPos = 1;
        return _this;
    }
    ProjectListPage.prototype.searchProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cond, sort, projectList;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cond = "count=" + this.PAGE_COUNT + "&page=" + this.currentPage;
                        sort = document.querySelector("#sort");
                        if (sort) {
                            cond += "&sort=" + sort.dataset.name;
                        }
                        projectList = [];
                        return [4 /*yield*/, getFetch("projects", cond).then(function (result) {
                                var _a;
                                if (result.result.code == 104) {
                                    projectList = result.data;
                                    _this.totalCount = (_a = result.option) === null || _a === void 0 ? void 0 : _a.countTotal;
                                    _this.updatePageCount();
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
                                _this.totalCount = 100;
                                _this.updatePageCount();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, projectList];
                }
            });
        });
    };
    ProjectListPage.prototype.updatePageCount = function () {
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
    ProjectListPage.prototype.updateProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var projectContainer, projectList, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        projectContainer = document.querySelector("#projectContainer");
                        return [4 /*yield*/, this.searchProjectList()];
                    case 1:
                        projectList = _a.sent();
                        if (projectContainer) {
                            html = "";
                            projectList.forEach(function (project) {
                                var skillListHtml = "";
                                project.skills.forEach(function (skill) {
                                    skillListHtml += "\n                        <div data-name=\"skillCard\">\n                            <span data-name=\"skillId\" style=\"display: none;\"></span>\n                            <img src=\"".concat(API_URL, "/").concat(skill.image, "\" title=\"").concat(skill.name, "\" style=\"width: 48px; height: 48px;\">\n                        </div>");
                                });
                                html += "\n                    <article class=\"box-layout column-top-stretch-flex-layout padding-level-8 gap-level-6 clickable\" data-name=\"projectCard\" onclick=\"ProjectListPage.openProjectDetail(this)\">\n                        <span data-name=\"projectId\" style=\"display: none;\">210312492937sad</span>\n                        <div class=\"row-middle-stretch-flex-layout\">\n                            <span>".concat(project.teamRecruitmentStartDate, " ~ ").concat(project.teamRecruitmentEndDate, "</span>\n                            <span class=\"padding-level-4 round filled\">\uBAA8\uC9D1\uC911</span>\n                        </div>\n                        <div>\n                            <span class=\"title-text\">").concat(project.title, "</span>\n                        </div>\n                        <div style=\"display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden;\">\n                            ").concat(project.content, "\n                        </div>\n                        <div class=\"line\"></div>\n                        <div class=\"row-middle-stretch-flex-layout gap-level-5\">\n                            <div class=\"row-middle-stretch-flex-layout gap-level-2\">\n                                <span class=\"bold-text\">\uD604\uC7AC \uC778\uC6D0</span>\n                                <span>1\uBA85</span>\n                            </div>\n                            <div class=\"row-middle-stretch-flex-layout gap-level-2\">\n                                <span class=\"bold-text\">\uBAA8\uC9D1 \uC778\uC6D0</span>\n                                <span>").concat(toSummaryNumber(project.personnel), "\uBA85</span>\n                            </div>\n                        </div>\n                        <div class=\"column-middle-left-flex-layout gap-level-5\">\n                            <span class=\"bold-text\">\uAE30\uC220 \uC2A4\uD0DD</span>\n                            <div class=\"row-top-left-flex-layout gap-level-2 wrap\">\n                                ").concat(skillListHtml, "\n                            </div>\n                        </div>\n                        <div class=\"row-middle-right-flex-layout gap-level-5 wrap\">\n                            <div class=\"row-middle-left-flex-layout gap-level-2\">\n                                <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"eye-icon\"/> </svg>\n                                <span>").concat(toSummaryNumber(project.countViews), "</span>\n                            </div>\n                            <div class=\"row-middle-left-flex-layout gap-level-2\">\n                                <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"heart-icon\"/> </svg>\n                                <span>").concat(toSummaryNumber(project.countGreats), "</span>\n                            </div>\n                            <div class=\"row-middle-left-flex-layout gap-level-2\">\n                                <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"bubble-icon\"/> </svg>\n                                <span>").concat(toSummaryNumber(project.countViews), "</span>\n                            </div>\n                        </div>\n                    </article>");
                            });
                            projectContainer.innerHTML = html;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectListPage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.contents) {
                    this.contents.innerHTML = "\n                <section class=\"container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10\">\n                    <article class=\"row-middle-stretch-flex-layout\">\n                        <h1 class=\"title-text bold-text\">\uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D</h1>\n                        <div class=\"row-middle-right-flex-layout\" style=\"position: relative;\">\n                            <div id=\"sortDropDown\" class=\"row-middle-left-flex-layout clickable\">\n                                <span id=\"sort\" data-name=\"latest\">\uCD5C\uC2E0\uC21C</span>\n                                <button class=\"icon-button transparent-button\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"bottom-icon\"/> </svg> </button>\n                            </div>\n                            \n                            <ul id=\"sortMenu\" class=\"box-layout\" style=\"position: absolute; top: 100%; left: 0; width: 100%; display: none;\">\n                                <li class=\"padding-level-4 clickable\" data-name=\"latest\">\uCD5C\uC2E0\uC21C</li>\n                                <li class=\"padding-level-4 clickable\" data-name=\"old\">\uACFC\uAC70\uC21C</li>\n                                <li class=\"padding-level-4 clickable\" data-name=\"best\">\uC778\uAE30\uC21C</li>\n                            </ul>\n                        </div>\n                    </article>\n\n                    <article id=\"projectContainer\" class=\"row-top-left-flex-layout gap-level-8 item-3-layout wrap\">\n                    </article>\n\n                    <article class=\"row-middle-center-flex-layout\">\n                        <button id=\"prevPageButton\" class=\"icon-button transparent-button\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"left-icon\"/> </svg> </button>\n                        <div id=\"pageContainer\" class=\"row-middle-center-flex-layout\">\n                        </div>\n                        <button id=\"nextPageButton\" class=\"icon-button transparent-button\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"right-icon\"/> </svg> </button>\n                    </article>\n                </section>";
                    this.updateProjectList();
                }
                return [2 /*return*/];
            });
        });
    };
    ProjectListPage.prototype.bindingEvents = function () {
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
                _this.updateProjectList();
            }
        });
        prevPageButton === null || prevPageButton === void 0 ? void 0 : prevPageButton.addEventListener("click", function () {
            _this.phase = Math.min(_this.maxPhase, _this.phase - 1);
            _this.updateProjectList();
        });
        nextPageButton === null || nextPageButton === void 0 ? void 0 : nextPageButton.addEventListener("click", function () {
            _this.phase = Math.min(_this.maxPhase, _this.phase + 1);
            _this.updateProjectList();
        });
        pageContainer === null || pageContainer === void 0 ? void 0 : pageContainer.addEventListener("click", function (e) {
            var target = e.target;
            if (target) {
                pageContainer === null || pageContainer === void 0 ? void 0 : pageContainer.querySelectorAll("span").forEach(function (page, i) {
                    if (page == target) {
                        _this.selectedPos = i + 1;
                        _this.updateProjectList();
                    }
                });
            }
        });
    };
    ProjectListPage.openProjectDetail = function (projectCard) {
        var _a;
        var projectId = (_a = projectCard.querySelector("[data-name=projectId]")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        if (projectId) {
            console.log(projectId);
            //navigate("create-project", {projectId});
            navigate("create-project");
        }
    };
    return ProjectListPage;
}(Page));
