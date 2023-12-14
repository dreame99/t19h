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
    ProfilePage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.contents) {
                    this.contents.innerHTML = "\n                <section class=\"container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10\">\n                    <h1 class=\"title-text bold-text\">\uD504\uB85C\uD544</h1>\n                    <article class=\"box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8\">\n                        <div class=\"row-top-right-flex-layout\">\n                            <div class=\"toggle-button\">\n                                <input type=\"checkbox\">\n                                <div class=\"toggle-layer\"></div>\n                            </div>\n                        </div>\n                        <div class=\"column-top-center-flex-layout gap-level-4\" data-name=\"userCard\">\n                            <div class=\"column-top-center-flex-layout\">\n                                <span data-name=\"userId\" style=\"display: none;\"></span>\n                                <span class=\"filled round horsetail padding-level-3\">1,234\uC810</span>\n                                <img class=\"bordered round\" src=\"./src/assets/images/avatars/avatar-2.png\" style=\"width: 200px; height: 200px;\">\n                            </div>\n                            <span>\uC218\uC6D0\uD1B5\uAC10\uC790</span>\n                        </div>\n                    </article>\n                    <article class=\"box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8\">\n                        <div class=\"row-middle-stretch-flex-layout\">\n                            <div class=\"row-middle-left-flex-layout wrap\">\n                                <span>\uC790\uC2E0\uC788\uB294 \uAE30\uC220</span>\n                                <button id=\"addUseSkillButton\" class=\"icon-button transparent-button\" title=\"add skill\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"add-icon\"/> </svg> </button>\n                            </div>\n                            <div id=\"useSKillContainer\" class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                                <div data-name=\"skilLCard\">\n                                    <span data-name=\"skillId\" style=\"display: hidden;\"></span>\n                                    <img src=\"./src/assets/images/skills/aftereffects-original.png\" title=\"aftereffects\" style=\"width: 48px; height: 48px;\">\n                                </div>\n                                <div data-name=\"skilLCard\">\n                                    <span data-name=\"skillId\" style=\"display: hidden;\"></span>\n                                    <img src=\"./src/assets/images/skills/aftereffects-original.png\" title=\"aftereffects\" style=\"width: 48px; height: 48px;\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row-middle-stretch-flex-layout\">\n                            <div class=\"row-middle-left-flex-layout wrap\">\n                                <span>\uACF5\uBD80\uD558\uACE0 \uC2F6\uC740 \uAE30\uC220</span>\n                                <button id=\"addWannaSkillButton\" class=\"icon-button transparent-button\" title=\"add skill\"> <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"add-icon\"/> </svg> </button>\n                            </div>\n                            <div id=\"wannaSkillContainer\" class=\"row-middle-left-flex-layout wrap gap-level-2\">\n                                <div data-name=\"skilLCard\">\n                                    <span data-name=\"skillId\" style=\"display: hidden;\"></span>\n                                    <img src=\"./src/assets/images/skills/aftereffects-original.png\" title=\"aftereffects\" style=\"width: 48px; height: 48px;\">\n                                </div>\n                                <div data-name=\"skilLCard\">\n                                    <span data-name=\"skillId\" style=\"display: hidden;\"></span>\n                                    <img src=\"./src/assets/images/skills/aftereffects-original.png\" title=\"aftereffects\" style=\"width: 48px; height: 48px;\">\n                                </div>\n                                <div data-name=\"skilLCard\">\n                                    <span data-name=\"skillId\" style=\"display: hidden;\"></span>\n                                    <img src=\"./src/assets/images/skills/aftereffects-original.png\" title=\"aftereffects\" style=\"width: 48px; height: 48px;\">\n                                </div>\n                                <div data-name=\"skilLCard\">\n                                    <span data-name=\"skillId\" style=\"display: hidden;\"></span>\n                                    <img src=\"./src/assets/images/skills/aftereffects-original.png\" title=\"aftereffects\" style=\"width: 48px; height: 48px;\">\n                                </div>\n                            </div>\n                        </div>\n                    </article>\n                </section>";
                }
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.bindingEvents = function () {
    };
    return ProfilePage;
}(Page));
