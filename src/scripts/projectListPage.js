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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectListPage.prototype.searchProjectList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var projectList, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        projectList = [];
                        if (!(SERVER_INFO == "RUN")) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetch(API_URL + "/projects", {
                                method: "POST",
                                body: JSON.stringify({ type: "최신순", count: 1, page: 1 })
                            })
                                .then(function (response) { return response.json(); })
                                .then(function (result) {
                                projectList = result;
                            })
                                .catch(function (e) { return console.log(e); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        for (i = 0; i < 9; i++) {
                            projectList.push({
                                recruitStartDate: "20231115",
                                recruitEndDate: "20231215",
                                title: "팀원구함",
                                contents: "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br>".repeat(i * 2),
                                currentMember: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i)),
                                additionalRecruitMember: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i)),
                                skills: ["bootstrap", "mongodb", "figma", "github", "git", "html5", "java", "spring", "javascript", "typescript", "kotlin", "nodejs", "react", "vuejs"].slice(0, i),
                                watchCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(12, i)),
                                goodCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(6, i)),
                                mentionCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i))
                            });
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, projectList];
                }
            });
        });
    };
    ProjectListPage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            var projectList, article, div, titleContainer, span, dropDown, ul, li1, li2, li3, projectListContainer, pageContainer, pageContainerElem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.contents) return [3 /*break*/, 2];
                        this.contents.innerHTML = "";
                        return [4 /*yield*/, this.searchProjectList()];
                    case 1:
                        projectList = _a.sent();
                        article = createElement("article");
                        div = createElement("div", "", "", "width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;");
                        article.appendChild(div);
                        titleContainer = createElement("div", "", "title-container", "width: 100%; display: flex; align-items: flex-end; justify-content: space-between;");
                        span = createElement("span", "", "title");
                        span.innerHTML = "프로젝트 목록";
                        titleContainer.appendChild(span);
                        dropDown = createElement("div", "", "", "display: flex; align-items: center; gap: 12px; cursor: pointer; position: relative;");
                        dropDown.innerHTML = "\n                <span style=\"text-wrap: nowrap;\">\uCD5C\uC2E0\uC21C</span>\n                <svg viewBox=\"0 0 24 24\" style=\"width: 24px; height: 24px;\">\n                    <path d=\"M4 7 L12 17 L20 7\" style=\"fill: none; stroke: black; stroke-width: 2px;\"></path>\n                </svg>\n            ";
                        ul = createElement("ul", "", "", "list-style: none; background: white; width: 100%; position: absolute; top: 100%; box-shadow: 0 8px 8px #0002; display: none;");
                        li1 = createElement("li", "", "", "margin: 12px;");
                        li1.innerHTML = "최신순";
                        li1.addEventListener("click", function () {
                            var span = dropDown.querySelector("span");
                            span.innerHTML = "최신순";
                        });
                        ul.appendChild(li1);
                        li2 = createElement("li", "", "", "margin: 12px;");
                        li2.innerHTML = "인기순";
                        li2.addEventListener("click", function () {
                            var span = dropDown.querySelector("span");
                            span.innerHTML = "인기순";
                        });
                        ul.appendChild(li2);
                        li3 = createElement("li", "", "", "margin: 12px;");
                        li3.innerHTML = "과거순";
                        li3.addEventListener("click", function () {
                            var span = dropDown.querySelector("span");
                            span.innerHTML = "과거순";
                        });
                        ul.appendChild(li3);
                        dropDown.appendChild(ul);
                        dropDown.addEventListener("click", function () {
                            if (ul.style.display == "none") {
                                ul.style.display = "inline";
                            }
                            else {
                                ul.style.display = "none";
                            }
                        });
                        titleContainer.appendChild(dropDown);
                        div.appendChild(titleContainer);
                        projectListContainer = createElement("article", "projectList", "", "width: 100%; margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;");
                        div.appendChild(projectListContainer);
                        projectList.forEach(function (project) { return projectListContainer.append((new ProjectAbridgement(project)).getElement()); });
                        pageContainer = new PageContainer();
                        pageContainerElem = pageContainer.getElement();
                        pageContainerElem.style.marginTop = "20px";
                        div.appendChild(pageContainerElem);
                        this.contents.appendChild(article);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ProjectListPage.prototype.bindingEvents = function () {
    };
    return ProjectListPage;
}(Page));
