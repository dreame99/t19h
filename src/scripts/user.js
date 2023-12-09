var UserAbridgement = /** @class */ (function () {
    function UserAbridgement(user) {
        this.user = user;
        this.userAbridgement = document.createElement("div");
        this.userAbridgement.classList.add("user-abridgement");
        var point = document.createElement("span");
        point.classList.add("point");
        point.innerText = this.user.point.toLocaleString() + "점";
        this.userAbridgement.appendChild(point);
        var img = document.createElement("img");
        img.src = this.user.imagePath;
        img.onerror = function () { img.style.height = '0'; img.style.marginBottom = '100%'; img.style.border = "none"; };
        this.userAbridgement.appendChild(img);
        var name = document.createElement("span");
        name.classList.add("name");
        name.innerText = this.user.name;
        this.userAbridgement.appendChild(name);
    }
    UserAbridgement.prototype.render = function (container) {
        container.innerHTML += this.userAbridgement.outerHTML;
    };
    UserAbridgement.prototype.getElement = function () {
        return this.userAbridgement;
    };
    return UserAbridgement;
}());
