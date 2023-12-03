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
window.addEventListener("load", function () {
    switch (window.location.pathname) {
        case "/login":
            navigate("login");
            break;
        case "/join":
            navigate("join");
            break;
        default:
            navigate("main");
    }
    var headerLogo = document.getElementById("headerLogo");
    if (headerLogo) {
        headerLogo.onclick = function () { return navigate("main"); };
    }
    var headerMenuButton = document.getElementById("headerMenuButton");
    if (headerMenuButton) {
        headerMenuButton.onclick = function () {
            var menu = document.getElementsByClassName("menu")[0];
            if (menu.style.display == "flex") {
                menu.style.display = "none";
            }
            else {
                menu.style.display = "flex";
            }
        };
    }
    var headerLoginButton = document.getElementById("headerLoginButton");
    if (headerLoginButton) {
        headerLoginButton.onclick = function () { return navigate("login"); };
    }
    var headerJoinButton = document.getElementById("headerJoinButton");
    if (headerJoinButton) {
        headerJoinButton.onclick = function () { return navigate("join"); };
    }
    var headerAlarmButton = document.getElementById("headerAlarmButton");
    if (headerAlarmButton) {
        headerAlarmButton.onclick = function () {
        };
    }
    var headerLogoutButton = document.getElementById("headerLogoutButton");
    if (headerLogoutButton) {
        headerLogoutButton.onclick = function () {
            LoginManager.logout();
        };
    }
});
function navigate(page) {
    return __awaiter(this, void 0, void 0, function () {
        var isLogin, headerMenuButton, headerBackwardButton, headerLoginButton, headerJoinButton, headerAlarmButton, headerLogoutButton, header, contents;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, LoginManager.isLogin()];
                case 1:
                    isLogin = _a.sent();
                    console.log(isLogin);
                    headerMenuButton = document.getElementById("headerMenuButton");
                    headerBackwardButton = document.getElementById("headerBackwardButton");
                    headerLoginButton = document.getElementById("headerLoginButton");
                    headerJoinButton = document.getElementById("headerJoinButton");
                    headerAlarmButton = document.getElementById("headerAlarmButton");
                    headerLogoutButton = document.getElementById("headerLogoutButton");
                    if (isLogin) {
                        headerLoginButton.style.display = "none";
                        headerJoinButton.style.display = "none";
                        headerAlarmButton.style.display = "block";
                        headerLogoutButton.style.display = "block";
                    }
                    else {
                        headerLoginButton.style.display = "block";
                        headerJoinButton.style.display = "block";
                        headerAlarmButton.style.display = "none";
                        headerLogoutButton.style.display = "none";
                    }
                    header = document.getElementById("header");
                    contents = document.getElementById("contents");
                    switch (page) {
                        case "main":
                            headerMenuButton.style.display = "block";
                            headerBackwardButton.style.display = "none";
                            new MainPage(contents).init();
                            break;
                        case "login":
                            if (isLogin) {
                                headerMenuButton.style.display = "block";
                                headerBackwardButton.style.display = "none";
                                new MainPage(contents).init();
                            }
                            else {
                                new LoginPage(contents).init();
                            }
                            break;
                        case "join":
                            if (isLogin) {
                                headerMenuButton.style.display = "block";
                                headerBackwardButton.style.display = "none";
                                new MainPage(contents).init();
                            }
                            else {
                                new JoinPage("contents").init();
                            }
                            break;
                        default:
                            headerMenuButton.style.display = "block";
                            headerBackwardButton.style.display = "none";
                            new MainPage(contents).init();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
