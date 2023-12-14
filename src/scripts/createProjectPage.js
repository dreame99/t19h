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
var API_RESULT_CODE = {
    "100": "성공적으로 로그인 되었습니다.",
    "103": "성공적으로 회원가입 되었습니다.",
    "105": "성공적으로 로그아웃 되었습니다.",
    "402": "아이디가 입력되지 않았습니다.",
    "403": "비밀번호가 입력되지 않았습니다.",
    "404": "비밀번호 확인이 입력되지 않았습니다.",
    "405": "이름이 입력되지 않았습니다.",
    "406": "아이디 형식이 올바르지 않습니다.",
    "407": "비밀번호 형식이 올바르지 않습니다.",
    "408": "비밀번호 확인 형식이 올바르지 않습니다.",
    "409": "이름 형식이 올바르지 않습니다.",
    "410": "아이디가 중복됩니다.",
    "400": "아이디 또는 비밀번호가 입력되지 않았습니다.",
    "401": "아이디 또는 비밀번호의 형식이 올바르지 않습니다.",
    "104": "성공적으로 조회되었습니다.",
    "411": "조회에 실패했습니다.",
    "426": "비밀번호와 비밀번호 확인이 서로 일치하지 않습니다."
};
var API_URL = "https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app/";
function postFetch(uri, data) {
    console.log("post fetch to " + API_URL + uri);
    console.log("data ", data);
    return fetch(API_URL + uri, {
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
    })
        .then(function (response) { return response.json(); });
}
function getFetch(uri, data) {
    console.log("get fetch to " + API_URL + uri);
    console.log("data ", data);
    var cond = "";
    if (data && data.length) {
        cond = "?" + data;
    }
    return fetch(API_URL + uri + cond, {
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: "GET",
        credentials: "include",
    })
        .then(function (response) { return response.json(); });
}
var CreateProjectPage = /** @class */ (function (_super) {
    __extends(CreateProjectPage, _super);
    function CreateProjectPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateProjectPage.prototype.updateSearchList = function (skillList) {
        var searchList = document.querySelector("#searchList");
        if (searchList) {
            searchList.innerHTML = "";
            skillList.forEach(function (skill) {
                var li = document.createElement("li");
                li.classList.add("row-middle-left-flex-layout", "gap-level-3", "clickable");
                var img = document.createElement("img");
                img.src = "./src/assets/images/skills/" + skill.image;
                img.style.width = "32px";
                img.style.height = "32px";
                li.append(img);
                var span = document.createElement("span");
                span.innerText = skill.name;
                li.append(span);
                var hidden = document.createElement("span");
                hidden.style.visibility = "hidden";
                hidden.innerText = skill.id;
                li.append(hidden);
                li.addEventListener("click", function () {
                    var spans = this.getElementsByTagName("span");
                    if (spans) {
                        var projectSkillContainer = document.querySelector("#projectSkillContainer");
                        if (projectSkillContainer) {
                            projectSkillContainer.appendChild(this.getElementsByTagName("img")[0].cloneNode(true));
                        }
                        var popupSkillContainer = document.querySelector("#popupSkillContainer");
                        if (popupSkillContainer) {
                            popupSkillContainer.appendChild(this.getElementsByTagName("img")[0].cloneNode(true));
                        }
                        console.log(spans[1].textContent);
                    }
                });
                searchList === null || searchList === void 0 ? void 0 : searchList.appendChild(li);
            });
        }
    };
    CreateProjectPage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.contents) {
                    this.contents.innerHTML = "\n                <section class=\"container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10\">\n                    <h1 class=\"title-text bold-text\">\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131</h1>\n                    <article class=\"box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8\">\n                        <div class=\"row-top-left-flex-layout item-2-layout\">\n                            <div class=\"column-top-left-flex-layout gap-level-4\">\n                                <span class=\"bold-text\">\uD504\uB85C\uC81D\uD2B8\uBA85</span>\n                                <input type=\"text\" id=\"title\" class=\"padding-level-5\">\n                            </div>\n            \n                            <div class=\"column-top-left-flex-layout gap-level-4\">\n                                <span class=\"bold-text\">\uD504\uB85C\uC81D\uD2B8 \uAE30\uAC04</span>\n                                <div class=\"row-top-left-flex-layout gap-level-2\">\n                                    <input type=\"date\" id=\"projectStartDate\" class=\"padding-level-5\">\n                                    <input type=\"date\" id=\"projectEndDate\" class=\"padding-level-5\">\n                                </div>\n                            </div>\n                        </div>\n        \n                        <div class=\"row-top-left-flex-layout item-2-layout\">\n                            <div class=\"column-top-left-flex-layout gap-level-4\">\n                                <span class=\"bold-text\">\uBAA8\uC9D1 \uC778\uC6D0</span>\n                                <input type=\"text\" id=\"personnel\" class=\"padding-level-5\" onblur=\"this.value = this.value.replace(/[^0-9]/g, '')\" onkeyup=\"this.value = this.value.replace(/[^0-9]/g, '')\">\n                            </div>\n            \n                            <div class=\"column-top-left-flex-layout gap-level-4\">\n                                <span class=\"bold-text\">\uBAA8\uC9D1 \uAE30\uAC04</span>\n                                <div class=\"row-top-left-flex-layout gap-level-2\">\n                                    <input type=\"date\" id=\"recruitStartDate\" class=\"padding-level-5\">\n                                    <input type=\"date\" id=\"recruitEndDate\" class=\"padding-level-5\">\n                                </div>\n                            </div>\n                        </div>\n        \n                        <div class=\"row-top-stretch-flex-layout item-1-layout\">\n                            <div class=\"column-top-left-flex-layout gap-level-4 item-1-layout\">\n                                <span class=\"bold-text\">\uAE30\uC220 \uC2A4\uD0DD</span>\n                                <div class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                                    <div id=\"projectSkillContainer\" class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                                        <div data-name=\"skilLCard\">\n                                            <span data-name=\"skillId\" style=\"display: hidden;\"></span>\n                                            <img src=\"./src/assets/images/skills/aftereffects-original.png\" title=\"aftereffects\" style=\"width: 48px; height: 48px;\">\n                                        </div>\n                                        <div data-name=\"skilLCard\">\n                                            <span data-name=\"skillId\" style=\"display: hidden;\"></span>\n                                            <img src=\"./src/assets/images/skills/aftereffects-original.png\" title=\"aftereffects\" style=\"width: 48px; height: 48px;\">\n                                        </div>\n                                        <div data-name=\"skilLCard\">\n                                            <span data-name=\"skillId\" style=\"display: hidden;\"></span>\n                                            <img src=\"./src/assets/images/skills/aftereffects-original.png\" title=\"aftereffects\" style=\"width: 48px; height: 48px;\">\n                                        </div>\n                                    </div>\n                                    <button id=\"addSkillButton\" class=\"icon-button transparent-button\" title=\"add skill\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"add-icon\"/> </svg> </button>\n                                </div>\n                            </div>\n                        </div>\n        \n                        <div class=\"item-1-layout\">\n                            <textarea id=\"projectContents\" style=\"height: 400px;\"></textarea>\n                        </div>\n        \n                        <div class=\"row-top-center-flex-layout\">\n                            <button id=\"projectCreateButton\" class=\"padding-level-5\">\uC0DD\uC131\uD558\uAE30</button>\n                        </div>\n                    </article>\n                </section>\n\n                <section id=\"screenCover\" class=\"screen-cover\">\n                </section>\n        \n                <section id=\"layerPopup\" class=\"fix-center-pos box-layout padding-level-10 column-top-center-flex-layout gap-level-8 item-1-layout\" style=\"display: none; z-index: 100;\">\n                    <span class=\"title-text row-top-center-flex-layout\">\uC2A4\uD0AC \uC870\uD68C</span>\n                    <div class=\"column-top-left-flex-layout gap-level-4\">\n                        <span class=\"bold-text\">\uB4F1\uB85D\uB41C \uAE30\uC220</span>\n                        <div id=\"popupSkillContainer\" class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                            <img src=\"./src/assets/images/skills/aftereffects-original.png\" style=\"width: 48px; height: 48px;\">\n                            <img src=\"./src/assets/images/skills/aftereffects-original.png\" style=\"width: 48px; height: 48px;\">\n                            <img src=\"./src/assets/images/skills/aftereffects-original.png\" style=\"width: 48px; height: 48px;\">\n                            <img src=\"./src/assets/images/skills/aftereffects-original.png\" style=\"width: 48px; height: 48px;\">\n                            <img src=\"./src/assets/images/skills/aftereffects-original.png\" style=\"width: 48px; height: 48px;\">\n                            <img src=\"./src/assets/images/skills/aftereffects-original.png\" style=\"width: 48px; height: 48px;\">\n                        </div>\n                    </div>\n                    <div class=\"column-top-left-flex-layout gap-level-4 item-1-layout\">\n                        <span class=\"bold-text\">\uAC80\uC0C9</span>\n                        <div class=\"column-top-stretch-flex-layout\">\n                            <div class=\"row-middle-stretch-flex-layout bordered\">\n                                <input type=\"text\" id=\"searchInput\" class=\"noborder padding-level-5\" placeholder=\"\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694\">\n                                <button class=\"icon-button transparent-button\" title=\"search\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"search-icon\"/> </svg> </button>\n                            </div>\n                            <ul id=\"searchList\" class=\"list-layout\" style=\"box-shadow: 0 8px 8px #0002; border-radius: 0 0 12px 12px; max-height: 392px; overflow: auto;\">\n                            </ul>\n                        </div>\n                    </div>\n                </section>";
                }
                return [2 /*return*/];
            });
        });
    };
    CreateProjectPage.prototype.bindingEvents = function () {
        var _this = this;
        var skillList = [];
        var screenCover = document.querySelector("#screenCover");
        var layerPopup = document.querySelector("#layerPopup");
        var addSkillButton = document.querySelector("#addSkillButton");
        var searchInput = document.querySelector("#searchInput");
        var searchList = document.querySelector("#searchList");
        var projectCreateButton = document.querySelector("#projectCreateButton");
        projectCreateButton === null || projectCreateButton === void 0 ? void 0 : projectCreateButton.addEventListener("click", function () {
            // 프로젝트명 체크
            var title = document.getElementById("title");
            if (!title || !title.value) {
                alert("제목 입력해");
            }
            // 프로젝트 기간 체크
            // 모집 인원 체크
            // 모집 기간 체크
            // 스킬 체크
            postFetch("projects", { title: title.value, skills: [] }).then(function (result) {
                console.log(result);
            });
        });
        addSkillButton === null || addSkillButton === void 0 ? void 0 : addSkillButton.addEventListener("click", function () {
            if (screenCover && layerPopup) {
                if (screenCover.style.display != "block") {
                    screenCover.style.display = "block";
                    layerPopup.style.display = "flex";
                    document.body.style.overflow = "hidden";
                    getFetch("skills").then(function (result) {
                        console.log(result);
                        skillList = result.data;
                        _this.updateSearchList(skillList);
                    }).catch(function (e) {
                        skillList = [{ id: "1", name: "spring", image: "spring-original.png" },
                            { id: "2", name: "css3", image: "css3-original.png" },
                            { id: "3", name: "bootstrap", image: "bootstrap-original.png" },
                            { id: "4", name: "android", image: "android-original.png" },
                            { id: "5", name: "figma", image: "figma-original.png" },
                            { id: "6", name: "intellij", image: "intellij-original.png" },
                            { id: "7", name: "nodejs", image: "nodejs-original.png" },
                            { id: "8", name: "vscode", image: "vscode-original.png" },
                            { id: "9", name: "swift", image: "swift-original.png" }];
                        _this.updateSearchList(skillList);
                    });
                }
            }
        });
        screenCover === null || screenCover === void 0 ? void 0 : screenCover.addEventListener("click", function () {
            if (screenCover && layerPopup) {
                if (screenCover.style.display == "block") {
                    screenCover.style.display = "none";
                    layerPopup.style.display = "none";
                    document.body.style.overflow = "auto";
                }
            }
        });
        searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener("input", function () {
            var list = skillList.filter(function (skill) {
                if (searchInput) {
                    return skill.name.toUpperCase().includes(searchInput.value.toUpperCase());
                }
                return true;
            });
            _this.updateSearchList(list);
        });
    };
    return CreateProjectPage;
}(Page));
