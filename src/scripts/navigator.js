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
var _this = this;
var PAGES = ["main", "login", "join", "profile", "create-project", "project-list", "project-room", "member-list"];
var AUTH_PAGE = { main: MainPage, login: MainPage, join: MainPage, profile: ProfilePage, "create-project": CreateProjectPage, "project-list": ProjectListPage, "project-room": MainPage, "member-list": UserListPage };
var UNAUTH_PAGE = { main: MainPage, login: LoginPage, join: JoinPage, profile: ProfilePage, "create-project": CreateProjectPage, "project-list": ProjectListPage, "project-room": MainPage, "member-list": UserListPage };
var SERVER_INFO = "DEV";
function navigateToMainPage() {
    console.log("navigateToMainPage");
    navigate("main");
}
function navigateToLoginPage() {
    console.log("navigateToLoginPage");
    navigate("login");
}
function navigateToJoinPage() {
    console.log("navigateToJoinPage");
    navigate("join");
}
function toggleMenuPopup() {
    console.log("toggleMenuPopup");
    var menu = document.getElementsByClassName("menu")[0];
    if (menu) {
        menu.style.display = menu.style.display == "flex" ? "none" : "flex";
    }
}
function toggleAlarmPopup() {
    console.log("toggleAlarmPopup");
}
function closeMenuPopup() {
    var menu = document.getElementsByClassName("menu")[0];
    if (menu) {
        menu.style.display = "none";
    }
}
window.addEventListener("load", function () {
    var _a, _b, _c, _d, _e, _f, _g;
    var path = window.location.pathname.substring(1);
    if (PAGES.includes(path)) {
        navigate(path);
    }
    else {
        navigate("main");
    }
    (_a = document.getElementById("headerLogo")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", navigateToMainPage);
    (_b = document.getElementById("headerMenuButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", toggleMenuPopup);
    (_c = document.getElementById("headerLoginButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", navigateToLoginPage);
    (_d = document.getElementById("headerJoinButton")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", navigateToJoinPage);
    (_e = document.getElementById("headerAlarmButton")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", toggleAlarmPopup);
    (_f = document.getElementById("headerLogoutButton")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", LoginManager.logout);
    (_g = document.querySelectorAll("[data-nav]")) === null || _g === void 0 ? void 0 : _g.forEach(function (elem) {
        elem.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                path = elem.dataset.nav;
                if (path && PAGES.includes(path)) {
                    navigate(path);
                }
                else {
                    navigate("main");
                }
                return [2 /*return*/];
            });
        }); };
    });
});
function navigate(page) {
    return __awaiter(this, void 0, void 0, function () {
        var isLogin, headerMenuButton, headerBackwardButton, pageName, pageFunc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("navigate to", page);
                    return [4 /*yield*/, LoginManager.isLogin()];
                case 1:
                    isLogin = _a.sent();
                    console.log("login?", isLogin);
                    headerMenuButton = document.getElementById("headerMenuButton");
                    headerBackwardButton = document.getElementById("headerBackwardButton");
                    headerMenuButton.style.display = "block";
                    /*
                    if( page == "main" ) {
                        headerMenuButton.style.display = "block";
                        headerBackwardButton.style.display = "none";
                    } else {
                        headerMenuButton.style.display = "none";
                        headerBackwardButton.style.display = "block";
                    }
                    */
                    document.querySelectorAll(isLogin ? ".loginIcon" : ".logoutIcon").forEach(function (icon) { return icon.style.display = "block"; });
                    document.querySelectorAll(isLogin ? ".logoutIcon" : ".loginIcon").forEach(function (icon) { return icon.style.display = "none"; });
                    pageName = PAGES.includes(page) ? page : "main";
                    pageFunc = (isLogin ? AUTH_PAGE[pageName] : UNAUTH_PAGE[pageName]);
                    if (pageFunc) {
                        new pageFunc(document.getElementById("contents")).init();
                    }
                    window.scrollTo(0, 0);
                    closeMenuPopup();
                    return [2 /*return*/];
            }
        });
    });
}
