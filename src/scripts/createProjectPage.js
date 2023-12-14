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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var CreateProjectPage = /** @class */ (function (_super) {
    __extends(CreateProjectPage, _super);
    function CreateProjectPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skillList = [];
        return _this;
    }
    CreateProjectPage.prototype.closeErrorMessage = function () {
        var titleRuleText = document.querySelector("#titleRuleText");
        if (titleRuleText) {
            titleRuleText.style.display = "none";
        }
        var projectDateRuleText = document.querySelector("#projectDateRuleText");
        if (projectDateRuleText) {
            projectDateRuleText.style.display = "none";
        }
        var recruitRuleText = document.querySelector("#recruitRuleText");
        if (recruitRuleText) {
            recruitRuleText.style.display = "none";
        }
        var recruitDateRuleText = document.querySelector("#recruitDateRuleText");
        if (recruitDateRuleText) {
            recruitDateRuleText.style.display = "none";
        }
    };
    CreateProjectPage.prototype.openErrorMessage = function (ruleText, msg) {
        if (ruleText) {
            ruleText.style.display = "block";
            ruleText.classList.add("error-text");
            ruleText.innerText = msg;
        }
    };
    CreateProjectPage.prototype.updateSearchList = function (skillList) {
        var searchList = document.querySelector("#searchList");
        if (searchList) {
            searchList.innerHTML = "";
            var html = "";
            skillList.forEach(function (skill) {
                html += "\n                    <li class=\"row-middle-left-flex-layout gap-level-3 clickable\" onclick=\"CreateProjectPage.addSkillCard(this)\">\n                        <div data-name=\"skillCard\">\n                            <span data-name=\"skillId\" style=\"display: none;\">".concat(skill.id, "</span>\n                            <img src=\"").concat(API_URL, "/").concat(skill.image, "\" title=\"").concat(skill.name, "\" style=\"width: 48px; height: 48px;\">\n                        </div>\n                    </li>");
            });
            searchList.innerHTML = html;
        }
    };
    CreateProjectPage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.contents) {
                    this.contents.innerHTML = "\n                <section class=\"container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10\">\n                    <h1 class=\"title-text bold-text\">\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131</h1>\n                    <article class=\"box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8\">\n                        <div class=\"row-top-left-flex-layout item-2-layout\">\n                            <div class=\"column-top-left-flex-layout gap-level-4\">\n                                <span class=\"bold-text\">\uD504\uB85C\uC81D\uD2B8\uBA85</span>\n                                <input type=\"text\" id=\"title\" class=\"padding-level-5\">\n                                <span id=\"titleRuleText\" class=\"error-text\" style=\"display: none;\"></span>\n                            </div>\n            \n                            <div class=\"column-top-left-flex-layout gap-level-4\">\n                                <span class=\"bold-text\">\uD504\uB85C\uC81D\uD2B8 \uAE30\uAC04</span>\n                                <div class=\"row-top-left-flex-layout gap-level-2\">\n                                    <input type=\"date\" id=\"projectStartDate\" class=\"padding-level-5\">\n                                    <input type=\"date\" id=\"projectEndDate\" class=\"padding-level-5\">\n                                </div>\n                                <span id=\"projectDateRuleText\" class=\"error-text\" style=\"display: none;\"></span>\n                            </div>\n                        </div>\n        \n                        <div class=\"row-top-left-flex-layout item-2-layout\">\n                            <div class=\"column-top-left-flex-layout gap-level-4\">\n                                <span class=\"bold-text\">\uBAA8\uC9D1 \uC778\uC6D0</span>\n                                <input type=\"text\" id=\"personnel\" class=\"padding-level-5\" onblur=\"this.value = this.value.replace(/[^0-9]/g, '')\" onkeyup=\"this.value = this.value.replace(/[^0-9]/g, '')\">\n                                <span id=\"recruitRuleText\" class=\"error-text\" style=\"display: none;\"></span>\n                            </div>\n            \n                            <div class=\"column-top-left-flex-layout gap-level-4\">\n                                <span class=\"bold-text\">\uBAA8\uC9D1 \uAE30\uAC04</span>\n                                <div class=\"row-top-left-flex-layout gap-level-2\">\n                                    <input type=\"date\" id=\"recruitStartDate\" class=\"padding-level-5\">\n                                    <input type=\"date\" id=\"recruitEndDate\" class=\"padding-level-5\">\n                                </div>\n                                <span id=\"recruitDateRuleText\" class=\"error-text\" style=\"display: none;\"></span>\n                            </div>\n                        </div>\n        \n                        <div class=\"row-top-stretch-flex-layout item-1-layout\">\n                            <div class=\"column-top-left-flex-layout gap-level-4 item-1-layout\">\n                                <span class=\"bold-text\">\uAE30\uC220 \uC2A4\uD0DD</span>\n                                <div class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                                    <div id=\"projectSkillContainer\" class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                                    </div>\n                                    <button id=\"addSkillButton\" class=\"icon-button transparent-button\" title=\"add skill\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"add-icon\"/> </svg> </button>\n                                </div>\n                            </div>\n                        </div>\n        \n                        <div class=\"item-1-layout\">\n                            <textarea id=\"projectContents\" style=\"height: 400px;\"></textarea>\n                        </div>\n        \n                        <div class=\"row-top-center-flex-layout\">\n                            <button id=\"projectCreateButton\" class=\"padding-level-5\">\uC0DD\uC131\uD558\uAE30</button>\n                        </div>\n                    </article>\n                </section>\n\n                <section id=\"screenCover\" class=\"screen-cover\">\n                </section>\n        \n                <section id=\"layerPopup\" class=\"fix-center-pos box-layout padding-level-10 column-top-center-flex-layout gap-level-8 item-1-layout\" style=\"display: none; z-index: 100;\">\n                    <span class=\"title-text row-top-center-flex-layout\">\uC2A4\uD0AC \uC870\uD68C</span>\n                    <div class=\"column-top-left-flex-layout gap-level-4\">\n                        <span class=\"bold-text\">\uB4F1\uB85D\uB41C \uAE30\uC220</span>\n                        <div id=\"popupSkillContainer\" class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                        </div>\n                    </div>\n                    <div class=\"column-top-left-flex-layout gap-level-4 item-1-layout\">\n                        <span class=\"bold-text\">\uAC80\uC0C9</span>\n                        <div class=\"column-top-stretch-flex-layout\">\n                            <div class=\"row-middle-stretch-flex-layout bordered\">\n                                <input type=\"text\" id=\"searchInput\" class=\"noborder padding-level-5\" placeholder=\"\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694\">\n                                <button class=\"icon-button transparent-button\" title=\"search\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"search-icon\"/> </svg> </button>\n                            </div>\n                            <ul id=\"searchList\" class=\"list-layout\" style=\"box-shadow: 0 8px 8px #0002; border-radius: 0 0 12px 12px; max-height: 392px; overflow: auto;\">\n                            </ul>\n                        </div>\n                    </div>\n                </section>";
                }
                return [2 /*return*/];
            });
        });
    };
    CreateProjectPage.prototype.bindingEvents = function () {
        var _this = this;
        var screenCover = document.querySelector("#screenCover");
        var layerPopup = document.querySelector("#layerPopup");
        var addSkillButton = document.querySelector("#addSkillButton");
        var searchInput = document.querySelector("#searchInput");
        var searchList = document.querySelector("#searchList");
        var projectCreateButton = document.querySelector("#projectCreateButton");
        var title = document.querySelector("#title");
        var titleRuleText = document.querySelector("#titleRuleText");
        var projectStartDate = document.querySelector("#projectStartDate");
        var projectEndDate = document.querySelector("#projectEndDate");
        var projectDateRuleText = document.querySelector("#projectDateRuleText");
        var personnel = document.querySelector("#personnel");
        var recruitRuleText = document.querySelector("#recruitRuleText");
        var recruitStartDate = document.querySelector("#recruitStartDate");
        var recruitEndDate = document.querySelector("#recruitEndDate");
        var recruitDateRuleText = document.querySelector("#recruitDateRuleText");
        var projectContents = document.querySelector("#projectContents");
        var projectSkillContainer = document.querySelector("#projectSkillContainer");
        title === null || title === void 0 ? void 0 : title.addEventListener("focus", this.closeErrorMessage);
        projectStartDate === null || projectStartDate === void 0 ? void 0 : projectStartDate.addEventListener("focus", this.closeErrorMessage);
        projectEndDate === null || projectEndDate === void 0 ? void 0 : projectEndDate.addEventListener("focus", this.closeErrorMessage);
        personnel === null || personnel === void 0 ? void 0 : personnel.addEventListener("focus", this.closeErrorMessage);
        recruitStartDate === null || recruitStartDate === void 0 ? void 0 : recruitStartDate.addEventListener("focus", this.closeErrorMessage);
        recruitEndDate === null || recruitEndDate === void 0 ? void 0 : recruitEndDate.addEventListener("focus", this.closeErrorMessage);
        projectCreateButton === null || projectCreateButton === void 0 ? void 0 : projectCreateButton.addEventListener("click", function () {
            var isError = false;
            // 프로젝트명 체크
            if (!title || !title.value) {
                _this.openErrorMessage(titleRuleText, API_RESULT_CODE[413]);
                isError = true;
            }
            // 모집 인원 체크
            if (!personnel || !personnel.value) {
                _this.openErrorMessage(recruitRuleText, API_RESULT_CODE[414]);
                isError = true;
            }
            // 프로젝트 기간 체크
            if (!projectStartDate || !projectStartDate.value) {
                _this.openErrorMessage(projectDateRuleText, API_RESULT_CODE[415]);
                isError = true;
            }
            else if (!projectEndDate || !projectEndDate.value) {
                _this.openErrorMessage(projectDateRuleText, API_RESULT_CODE[416]);
                isError = true;
            }
            else if (projectStartDate.value.replace(/-/g, "") > projectEndDate.value.replace(/-/g, "")) {
                _this.openErrorMessage(projectDateRuleText, API_RESULT_CODE[424]);
                isError = true;
            }
            // 모집 기간 체크
            if (!recruitStartDate || !recruitStartDate.value) {
                _this.openErrorMessage(recruitDateRuleText, API_RESULT_CODE[417]);
                isError = true;
            }
            else if (!recruitEndDate || !recruitEndDate.value) {
                _this.openErrorMessage(recruitDateRuleText, API_RESULT_CODE[418]);
                isError = true;
            }
            else if (recruitStartDate.value.replace(/-/g, "") > recruitEndDate.value.replace(/-/g, "")) {
                _this.openErrorMessage(recruitDateRuleText, API_RESULT_CODE[425]);
                isError = true;
            }
            if (!isError) {
                postFetch("projects", {
                    title: title === null || title === void 0 ? void 0 : title.value,
                    personnel: personnel === null || personnel === void 0 ? void 0 : personnel.value,
                    projectStartDate: projectStartDate === null || projectStartDate === void 0 ? void 0 : projectStartDate.value,
                    projectEndDate: projectEndDate === null || projectEndDate === void 0 ? void 0 : projectEndDate.value,
                    recruitStartDate: recruitStartDate === null || recruitStartDate === void 0 ? void 0 : recruitStartDate.value,
                    recruitEndDate: recruitEndDate === null || recruitEndDate === void 0 ? void 0 : recruitEndDate.value,
                    content: projectContents === null || projectContents === void 0 ? void 0 : projectContents.value,
                    skills: projectSkillContainer ? __spreadArray([], projectSkillContainer.querySelectorAll("[data-name=skillId]"), true).map(function (o) { return o.innerHTML; }) : []
                })
                    .then(function (result) {
                    console.log(result);
                    navigate("main");
                })
                    .catch(function (e) { return alert("error msg : " + e); });
            }
        });
        addSkillButton === null || addSkillButton === void 0 ? void 0 : addSkillButton.addEventListener("click", function () {
            if (screenCover && layerPopup) {
                if (screenCover.style.display != "block") {
                    screenCover.style.display = "block";
                    layerPopup.style.display = "flex";
                    var popupSkillContainer = document.querySelector("#popupSkillContainer");
                    if (popupSkillContainer) {
                        popupSkillContainer.innerHTML = "";
                        var projectSkillContainer = document.querySelector("#projectSkillContainer");
                        if (projectSkillContainer) {
                            popupSkillContainer.innerHTML = projectSkillContainer.innerHTML;
                        }
                    }
                    getFetch("skills").then(function (result) {
                        console.log(result);
                        _this.skillList = result.data;
                        _this.updateSearchList(_this.skillList);
                    }).catch(function (e) {
                        alert("error msg : " + e);
                        _this.skillList = [{ id: "1", name: "spring", image: "skills/spring-original.png" },
                            { id: "2", name: "css3", image: "skills/css3-original.png" },
                            { id: "3", name: "bootstrap", image: "skills/bootstrap-original.png" },
                            { id: "4", name: "android", image: "skills/android-original.png" },
                            { id: "5", name: "figma", image: "skills/figma-original.png" },
                            { id: "6", name: "intellij", image: "skills/intellij-original.png" },
                            { id: "7", name: "nodejs", image: "skills/nodejs-original.png" },
                            { id: "8", name: "vscode", image: "skills/vscode-original.png" },
                            { id: "9", name: "swift", image: "skills/ swift-original.png" }];
                        _this.updateSearchList(_this.skillList);
                    });
                }
            }
        });
        screenCover === null || screenCover === void 0 ? void 0 : screenCover.addEventListener("click", function () {
            if (screenCover && layerPopup) {
                if (screenCover.style.display == "block") {
                    screenCover.style.display = "none";
                    layerPopup.style.display = "none";
                }
            }
        });
        searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener("input", function () {
            var list = _this.skillList.filter(function (skill) {
                if (searchInput) {
                    return skill.name.toUpperCase().includes(searchInput.value.toUpperCase());
                }
                return true;
            });
            _this.updateSearchList(list);
        });
    };
    CreateProjectPage.addSkillCard = function (skillItem) {
        var _a;
        var skillCard = skillItem.querySelector("[data-name=skillCard]");
        var skillId = (_a = skillCard.querySelector("[data-name=skillId]")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        if (skillId) {
            var projectSkillContainer = document.querySelector("#projectSkillContainer");
            var popupSkillContainer = document.querySelector("#popupSkillContainer");
            if (projectSkillContainer && popupSkillContainer) {
                var isDuplicate = __spreadArray([], projectSkillContainer.querySelectorAll("[data-name=skillId]"), true).filter(function (o) { return o.innerHTML == skillId; }).length >= 1;
                if (!isDuplicate) {
                    projectSkillContainer.appendChild(skillCard.cloneNode(true));
                    popupSkillContainer.appendChild(skillCard.cloneNode(true));
                }
            }
        }
    };
    return CreateProjectPage;
}(Page));
