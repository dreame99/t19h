function getSkillCardElement(skill, clickFunc) {
    return "\n        <div data-name=\"skillCard\">\n            <span data-name=\"skillId\" style=\"display: none;\">".concat(skill.id, "</span>\n            <img src=\"").concat(IMG_PATH, "/").concat(skill.image, "\" title=\"").concat(skill.name, "\" style=\"width: 48px; height: 48px;\">\n        </div>");
}
function getProjectCardElement(project, skillListHtml, clickFunc) {
    return "\n    <article class=\"box-layout column-top-stretch-flex-layout padding-level-8 gap-level-6 clickable\" data-name=\"projectCard\" onclick=\"".concat(clickFunc, "\">\n        <span data-name=\"projectId\" style=\"display: none;\">").concat(project.id, "</span>\n        <div class=\"row-middle-stretch-flex-layout\">\n            <span>").concat(project.teamRecruitmentStartDate, " ~ ").concat(project.teamRecruitmentEndDate, "</span>\n            <span class=\"padding-level-4 round filled\">\uBAA8\uC9D1\uC911</span>\n        </div>\n        <div>\n            <span class=\"title-text\">").concat(project.title, "</span>\n        </div>\n        <div style=\"display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden;\">\n            ").concat(project.content, "\n        </div>\n        <div class=\"line\"></div>\n        <div class=\"row-middle-stretch-flex-layout gap-level-5\">\n            <div class=\"row-middle-stretch-flex-layout gap-level-2\">\n                <span class=\"bold-text\">\uD604\uC7AC \uC778\uC6D0</span>\n                <span>1\uBA85</span>\n            </div>\n            <div class=\"row-middle-stretch-flex-layout gap-level-2\">\n                <span class=\"bold-text\">\uBAA8\uC9D1 \uC778\uC6D0</span>\n                <span>").concat(toSummaryNumber(project.personnel), "\uBA85</span>\n            </div>\n        </div>\n        <div class=\"column-middle-left-flex-layout gap-level-5\">\n            <span class=\"bold-text\">\uAE30\uC220 \uC2A4\uD0DD</span>\n            <div class=\"row-top-left-flex-layout gap-level-2 wrap\">\n                ").concat(skillListHtml, "\n            </div>\n        </div>\n        <div class=\"row-middle-right-flex-layout gap-level-5 wrap\">\n            <div class=\"row-middle-left-flex-layout gap-level-2\">\n                <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"eye-icon\"/> </svg>\n                <span>").concat(toSummaryNumber(project.countViews), "</span>\n            </div>\n            <div class=\"row-middle-left-flex-layout gap-level-2\">\n                <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"heart-icon\"/> </svg>\n                <span>").concat(toSummaryNumber(project.countGreats), "</span>\n            </div>\n            <div class=\"row-middle-left-flex-layout gap-level-2\">\n                <svg class=\"icon\" viewBox=\"0 0 24 24\"> <path class=\"bubble-icon\"/> </svg>\n                <span>").concat(toSummaryNumber(project.countViews), "</span>\n            </div>\n        </div>\n    </article>");
}
function getUserCardElement(user, clickFunc) {
    return "\n        <div class=\"column-top-center-flex-layout gap-level-4\" data-name=\"userCard\">\n            <div class=\"column-top-center-flex-layout\">\n                <span data-name=\"userId\" style=\"display: none;\">".concat(user.id, "</span>\n                <span class=\"filled round horsetail padding-level-3\">").concat(user.score.toLocaleString(), "\uC810</span>\n                <img class=\"bordered round\" src=\"").concat(IMG_PATH, "/").concat(user.fileRealName ? user.fileRealName : "profile/99321b41-ed25-4472-8157-56a94c81a5cb_avatar10.png", "\" style=\"width: 200px; height: 200px; margin-top: -19px;\">\n            </div>\n            <span>").concat(user.nickname, "</span>\n        </div>");
}
window.addEventListener("scroll", function () {
    var headerContainer = document.getElementById("headerContainer");
    var contentsContainer = document.getElementById("contentsContainer");
    if (headerContainer && contentsContainer) {
        if (window.scrollY > headerContainer.clientHeight) {
            headerContainer.classList.add("fixed");
            contentsContainer.classList.add("fixed");
        }
        else {
            headerContainer.classList.remove("fixed");
            contentsContainer.classList.remove("fixed");
        }
    }
});
function toDateString(date) {
    if (date.length == 8) {
        return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8);
    }
    return date;
}
function toSummaryNumber(n) {
    // kilo, million, billion, trillion, quadrillion
    var units = ["", "K", "M", "B", "T", "Q"];
    var idx = Math.min(units.length - 1, (("" + n).length - 1) / 3 | 0);
    return Math.round(((n / Math.pow(1000, idx))) * 10) / 10 + units[idx];
}
