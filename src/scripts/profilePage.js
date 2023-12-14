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
var ProfilePage = /** @class */ (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skillList = [];
        return _this;
    }
    ProfilePage.prototype.updateSearchList = function (skillList, containerId) {
        var searchList = document.querySelector("#searchList");
        if (searchList) {
            searchList.innerHTML = "";
            var html = "";
            skillList.forEach(function (skill) {
                html += "\n                    <li class=\"row-middle-left-flex-layout gap-level-3 clickable\" onclick=\"ProfilePage.addSkillCard(this, '".concat(containerId, "')\">\n                        <div data-name=\"skillCard\">\n                            <span data-name=\"skillId\" style=\"display: none;\">").concat(skill.id, "</span>\n                            <img src=\"").concat(API_URL, "/").concat(skill.image, "\" title=\"").concat(skill.name, "\" style=\"width: 48px; height: 48px;\">\n                        </div>\n                        <span>").concat(skill.name, "</span>\n                    </li>");
            });
            searchList.innerHTML = html;
        }
    };
    ProfilePage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.contents) {
                    this.contents.innerHTML = "\n                <section class=\"container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10\">\n                    <h1 class=\"title-text bold-text\">\uD504\uB85C\uD544</h1>\n                    <article class=\"box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8\">\n                        <div class=\"row-top-right-flex-layout\">\n                            <div class=\"toggle-button\">\n                                <input type=\"checkbox\" id=\"disclosure\">\n                                <div class=\"toggle-layer\"></div>\n                            </div>\n                        </div>\n                        <div class=\"column-top-center-flex-layout gap-level-4\" data-name=\"userCard\">\n                            <div class=\"column-top-center-flex-layout\">\n                                <span data-name=\"userId\" style=\"display: none;\"></span>\n                                <span class=\"filled round horsetail padding-level-3\">1,234\uC810</span>\n                                <img class=\"bordered round\" src=\"./src/assets/images/avatars/avatar-2.png\" style=\"width: 200px; height: 200px;\">\n                            </div>\n                            <span>\uC218\uC6D0\uD1B5\uAC10\uC790</span>\n                        </div>\n                    </article>\n                    <article class=\"box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8\">\n                        <div class=\"row-middle-stretch-flex-layout\">\n                            <div class=\"row-middle-left-flex-layout wrap\">\n                                <span>\uC790\uC2E0\uC788\uB294 \uAE30\uC220</span>\n                                <button id=\"addUseSkillButton\" class=\"icon-button transparent-button\" title=\"add skill\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"add-icon\"/> </svg> </button>\n                            </div>\n                            <div id=\"useSkillContainer\" class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                            </div>\n                        </div>\n                        <div class=\"row-middle-stretch-flex-layout\">\n                            <div class=\"row-middle-left-flex-layout wrap\">\n                                <span>\uACF5\uBD80\uD558\uACE0 \uC2F6\uC740 \uAE30\uC220</span>\n                                <button id=\"addWannaSkillButton\" class=\"icon-button transparent-button\" title=\"add skill\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"add-icon\"/> </svg> </button>\n                            </div>\n                            <div id=\"wannaSkillContainer\" class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                            </div>\n                        </div>\n                    </article>\n                </section>\n\n                <section id=\"screenCover\" class=\"screen-cover\">\n                </section>\n        \n                <section id=\"layerPopup\" class=\"fix-center-pos box-layout padding-level-10 column-top-center-flex-layout gap-level-8 item-1-layout\" style=\"display: none; z-index: 100;\">\n                    <span class=\"title-text row-top-center-flex-layout\">\uC2A4\uD0AC \uC870\uD68C</span>\n                    <div class=\"column-top-left-flex-layout gap-level-4\">\n                        <span class=\"bold-text\">\uB4F1\uB85D\uB41C \uAE30\uC220</span>\n                        <div id=\"popupSkillContainer\" class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                        </div>\n                    </div>\n                    <div class=\"column-top-left-flex-layout gap-level-4 item-1-layout\">\n                        <span class=\"bold-text\">\uAC80\uC0C9</span>\n                        <div class=\"column-top-stretch-flex-layout\">\n                            <div class=\"row-middle-stretch-flex-layout bordered\">\n                                <input type=\"text\" id=\"searchInput\" class=\"noborder padding-level-5\" placeholder=\"\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694\">\n                                <button class=\"icon-button transparent-button\" title=\"search\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"search-icon\"/> </svg> </button>\n                            </div>\n                            <ul id=\"searchList\" class=\"list-layout\" style=\"box-shadow: 0 8px 8px #0002; border-radius: 0 0 12px 12px; max-height: 392px; overflow: auto;\">\n                            </ul>\n                        </div>\n                    </div>\n                </section>";
                }
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.bindingEvents = function () {
        var _this = this;
        var screenCover = document.querySelector("#screenCover");
        var layerPopup = document.querySelector("#layerPopup");
        var addUseSkillButton = document.querySelector("#addUseSkillButton");
        var addWannaSkillButton = document.querySelector("#addWannaSkillButton");
        var searchInput = document.querySelector("#searchInput");
        var disclosure = document.querySelector("#disclosure");
        var currentSkillContainer = "";
        addUseSkillButton === null || addUseSkillButton === void 0 ? void 0 : addUseSkillButton.addEventListener("click", function () {
            currentSkillContainer = "useSkillContainer";
            _this.openSkillSearchPopup("useSkillContainer");
        });
        addWannaSkillButton === null || addWannaSkillButton === void 0 ? void 0 : addWannaSkillButton.addEventListener("click", function () {
            currentSkillContainer = "wannaSkillContainer";
            _this.openSkillSearchPopup("wannaSkillContainer");
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
            _this.updateSearchList(list, currentSkillContainer);
        });
        disclosure === null || disclosure === void 0 ? void 0 : disclosure.addEventListener("change", function () { return ProfilePage.updateProfile(); });
    };
    ProfilePage.prototype.openSkillSearchPopup = function (containerId) {
        var _this = this;
        var screenCover = document.querySelector("#screenCover");
        var layerPopup = document.querySelector("#layerPopup");
        if (screenCover && layerPopup) {
            if (screenCover.style.display != "block") {
                screenCover.style.display = "block";
                layerPopup.style.display = "flex";
                var popupSkillContainer = document.querySelector("#popupSkillContainer");
                if (popupSkillContainer) {
                    popupSkillContainer.innerHTML = "";
                    var skillContainer = document.querySelector("#" + containerId);
                    if (skillContainer) {
                        popupSkillContainer.innerHTML = skillContainer.innerHTML;
                    }
                }
                getFetch("skills").then(function (result) {
                    console.log(result);
                    _this.skillList = result.data;
                    _this.updateSearchList(_this.skillList, containerId);
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
                    _this.updateSearchList(_this.skillList, containerId);
                });
            }
        }
    };
    ProfilePage.updateProfile = function () {
        var disclosure = document.querySelector("#disclosure");
        var useSkillContainer = document.querySelector("#useSkillContainer");
        var wannaSkillContainer = document.querySelector("#wannaSkillContainer");
        var confidentSkills = useSkillContainer ? __spreadArray([], useSkillContainer.querySelectorAll("[data-name=skillId]"), true).map(function (o) { return o.innerHTML; }) : [];
        var wantToStudySkills = wannaSkillContainer ? __spreadArray([], wannaSkillContainer.querySelectorAll("[data-name=skillId]"), true).map(function (o) { return o.innerHTML; }) : [];
        var cond = "";
        cond += "disclosure=" + (disclosure === null || disclosure === void 0 ? void 0 : disclosure.checked);
        cond += "&confidentSkills=" + confidentSkills.toString();
        cond += "&confidentSkills=" + wantToStudySkills.toString();
        patchFetch("users", cond)
            .then(function (result) {
            console.log(result);
        })
            .catch(function (e) { return alert("error msg : " + e); });
    };
    ProfilePage.addSkillCard = function (skillItem, containerId) {
        var _a;
        var skillCard = skillItem.querySelector("[data-name=skillCard]");
        var skillId = (_a = skillCard.querySelector("[data-name=skillId]")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        if (skillId) {
            var skillContainer = document.querySelector("#" + containerId);
            var popupSkillContainer = document.querySelector("#popupSkillContainer");
            if (skillContainer && popupSkillContainer) {
                var isDuplicate = __spreadArray([], skillContainer.querySelectorAll("[data-name=skillId]"), true).filter(function (o) { return o.innerHTML == skillId; }).length >= 1;
                if (!isDuplicate) {
                    skillContainer.appendChild(skillCard.cloneNode(true));
                    popupSkillContainer.appendChild(skillCard.cloneNode(true));
                    this.updateProfile();
                }
            }
        }
    };
    return ProfilePage;
}(Page));
