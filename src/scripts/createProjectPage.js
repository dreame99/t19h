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
var CreateProjectPage = /** @class */ (function (_super) {
    __extends(CreateProjectPage, _super);
    function CreateProjectPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateProjectPage.prototype.searchUserList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userList, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userList = [];
                        if (!(SERVER_INFO == "RUN")) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetch(API_URL + "/users", {
                                method: "POST",
                                body: JSON.stringify({ type: "최신가입순", count: 1, page: 1 })
                            })
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
    CreateProjectPage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            var article, div, titleContainer, span, box;
            return __generator(this, function (_a) {
                if (this.contents) {
                    this.contents.innerHTML = "";
                    article = document.createElement("article");
                    div = createElement("div", "", "bucket");
                    article.appendChild(div);
                    titleContainer = createElement("div", "", "title-container");
                    span = createElement("span", "", "title");
                    span.innerHTML = "프로젝트 만들기";
                    titleContainer.appendChild(span);
                    div.appendChild(titleContainer);
                    box = createElement("div", "", "box");
                    div.appendChild(box);
                    box.innerHTML = "\n                <div style=\"display: flex; align-items: flex-start; justify-content: space-between; width: 100%;\">\n                    <div style=\"display: flex; flex-direction: column; gap: 28px;\">\n                        <div style=\"display: flex; flex-direction: column; gap: 12px;\">\n                            <span>\uD504\uB85C\uC81D\uD2B8\uBA85</span>\n                            <input type=\"text\" placeholder=\"\uD504\uB85C\uC81D\uD2B8\uBA85\"/>\n                        </div>\n                        <div style=\"display: flex; flex-direction: column; gap: 12px;\">\n                            <span>\uD504\uB85C\uC81D\uD2B8 \uC778\uC6D0</span>\n                            <input type=\"text\" placeholder=\"\uD504\uB85C\uC81D\uD2B8 \uC778\uC6D0\"/>\n                        </div>\n                    </div>\n                    <div style=\"display: flex; flex-direction: column; gap: 28px;\">\n                        <div style=\"display: flex; flex-direction: column; gap: 12px;\">\n                            <span>\uD504\uB85C\uC81D\uD2B8 \uAE30\uAC04</span>\n                            <div>\n                                <input type=\"text\" placeholder=\"\uC2DC\uC791\uC77C\uC790\"/>\n                                <input type=\"text\" placeholder=\"\uC885\uB8CC\uC77C\uC790\"/>\n                            </div>\n                        </div>\n                        <div style=\"display: flex; flex-direction: column; gap: 12px;\">\n                            <span>\uBAA8\uC9D1 \uAE30\uAC04</span>\n                            <div>\n                                <input type=\"text\" placeholder=\"\uC2DC\uC791\uC77C\uC790\"/>\n                                <input type=\"text\" placeholder=\"\uC885\uB8CC\uC77C\uC790\"/>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div style=\"width: 100%;\">\n                    <div style=\"display: flex; flex-direction: column; gap: 12px;\">\n                        <span>\uC0AC\uC6A9 \uAE30\uC220</span>\n                        <div style=\"width: 400px; height: 56px; background-color: #F1F1F1;\">\n                        </div>\n                    </div>\n                </div>\n\n                <textarea placeholder=\"\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694.\" style=\"width: 100%; height: 400px; background-color: #F1F1F1; border: 1px solid #DCDCDC;\"></textarea>\n\n                <button>\uC0DD\uC131\uD558\uAE30</button>\n            ";
                    this.contents.appendChild(article);
                }
                return [2 /*return*/];
            });
        });
    };
    CreateProjectPage.prototype.bindingEvents = function () {
    };
    return CreateProjectPage;
}(Page));
