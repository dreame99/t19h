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
function createElement(tagName, id, className, style) {
    var element = document.createElement(tagName);
    if (id) {
        element.setAttribute("id", id);
    }
    if (className) {
        element.setAttribute("class", className);
    }
    if (style) {
        element.setAttribute("style", style);
    }
    return element;
}
