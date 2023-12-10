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
var ProfilePage = /** @class */ (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfilePage.prototype.searchUserList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userList, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userList = [];
                        if (!(SERVER_INFO == "RUN")) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetch(API_URL + "/users" + "/2104895732577")
                                .then(function (response) { return response.json(); })
                                .then(function (result) {
                                userList = result;
                            })
                                .catch(function (e) { return console.log(e); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        for (i = 0; i < 10; i++) {
                            userList.push({
                                name: "내가세상가장매콤한사나이",
                                imagePath: "./src/assets/images/avatar" + (((Math.random() * 10) | 0) + 1) + ".png",
                                point: Math.pow(10, 10 - i)
                            });
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, userList];
                }
            });
        });
    };
    ProfilePage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            var article, bucket, imageBox, toggleContainer, toggleButton, checkbox, toggleLayer, userAbridgement, skillBox, confidenceSkills, iconText, span, icon, skillList, i, img1, skills, idx, wannaSkills, iconText, span, icon, skillList, i, img1, skills, idx;
            return __generator(this, function (_a) {
                if (this.contents) {
                    this.contents.innerHTML = "";
                    article = document.createElement("article");
                    this.contents.appendChild(article);
                    bucket = createElement("div", "", "bucket");
                    article.appendChild(bucket);
                    bucket.appendChild(createTitleContainer("프로필"));
                    imageBox = document.createElement("article");
                    imageBox.classList.add("box");
                    imageBox.classList.add("fill");
                    bucket.appendChild(imageBox);
                    toggleContainer = document.createElement("div");
                    toggleContainer.classList.add("row-end-center-flex-layout");
                    imageBox.appendChild(toggleContainer);
                    toggleButton = document.createElement("div");
                    toggleButton.classList.add("toggle-button");
                    toggleContainer.appendChild(toggleButton);
                    checkbox = document.createElement("input");
                    checkbox.setAttribute("type", "checkbox");
                    toggleButton.appendChild(checkbox);
                    toggleLayer = document.createElement("div");
                    toggleLayer.classList.add("toggle-layer");
                    toggleButton.appendChild(toggleLayer);
                    userAbridgement = new UserAbridgement({
                        name: "내가세상가장매콤한사나이",
                        imagePath: "./src/assets/images/avatar" + (((Math.random() * 10) | 0) + 1) + ".png",
                        point: 1175000
                    });
                    imageBox.appendChild(userAbridgement.getElement());
                    skillBox = document.createElement("article");
                    skillBox.classList.add("box");
                    skillBox.classList.add("fill");
                    bucket.appendChild(skillBox);
                    confidenceSkills = document.createElement("div");
                    confidenceSkills.classList.add("row-stretch-center-flex-layout");
                    skillBox.appendChild(confidenceSkills);
                    iconText = document.createElement("div");
                    iconText.classList.add("icon-text");
                    confidenceSkills.appendChild(iconText);
                    span = document.createElement("span");
                    span.classList.add("bold");
                    span.innerHTML = "자신있는 기술";
                    iconText.appendChild(span);
                    icon = document.createElement("button");
                    icon.classList.add("icon-button");
                    icon.classList.add("transparent-button");
                    icon.innerHTML = "\n            <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"add-icon\"/> </svg> </button>\n            ";
                    iconText.appendChild(icon);
                    skillList = document.createElement("div");
                    skillList.classList.add("skill-list");
                    confidenceSkills.appendChild(skillList);
                    for (i = 0; i < 18; i++) {
                        img1 = document.createElement("img");
                        img1.classList.add("skill");
                        skills = ["bootstrap", "mongodb", "figma", "github", "git", "html5", "java", "spring", "javascript", "typescript", "kotlin", "nodejs", "react", "vuejs"];
                        idx = Math.random() * skills.length | 0;
                        img1.setAttribute("src", "./src/assets/images/" + skills[idx] + "-original.png");
                        img1.setAttribute("title", skills[idx]);
                        skillList.appendChild(img1);
                    }
                    wannaSkills = document.createElement("div");
                    wannaSkills.classList.add("row-stretch-center-flex-layout");
                    skillBox.appendChild(wannaSkills);
                    iconText = document.createElement("div");
                    iconText.classList.add("icon-text");
                    wannaSkills.appendChild(iconText);
                    span = document.createElement("span");
                    span.classList.add("bold");
                    span.innerHTML = "공부하고 싶은 기술";
                    iconText.appendChild(span);
                    icon = document.createElement("button");
                    icon.classList.add("icon-button");
                    icon.classList.add("transparent-button");
                    icon.innerHTML = "\n            <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"add-icon\"/> </svg> </button>\n            ";
                    iconText.appendChild(icon);
                    skillList = document.createElement("div");
                    skillList.classList.add("skill-list");
                    wannaSkills.appendChild(skillList);
                    for (i = 0; i < 4; i++) {
                        img1 = document.createElement("img");
                        img1.classList.add("skill");
                        skills = ["bootstrap", "mongodb", "figma", "github", "git", "html5", "java", "spring", "javascript", "typescript", "kotlin", "nodejs", "react", "vuejs"];
                        idx = Math.random() * skills.length | 0;
                        img1.setAttribute("src", "./src/assets/images/" + skills[idx] + "-original.png");
                        img1.setAttribute("title", skills[idx]);
                        skillList.appendChild(img1);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.bindingEvents = function () {
    };
    return ProfilePage;
}(Page));
