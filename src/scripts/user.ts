interface User {
    id?: string;
    name: string;
    imagePath: string;
    point: number;
}

class UserAbridgement {
    private user: User;
    private userAbridgement: HTMLElement;

    constructor(user: User) {
        this.user = user;

        this.userAbridgement = document.createElement("div");
        this.userAbridgement.classList.add("user-abridgement");

        var point = document.createElement("span");
        point.classList.add("point");
        point.innerText = this.user.point.toLocaleString() + "점";
        this.userAbridgement.appendChild(point);

        var img = document.createElement("img");
        img.src = this.user.imagePath;
        img.onerror = () => {img.style.height='0'; img.style.marginBottom='100%'; img.style.border="none";};
        this.userAbridgement.appendChild(img);

        var name = document.createElement("span");
        name.classList.add("name");
        name.innerText = this.user.name;
        this.userAbridgement.appendChild(name);
    }

    public render(container: HTMLElement): void {
        container.innerHTML += this.userAbridgement.outerHTML;
    }

    public getElement(): HTMLElement {
        return this.userAbridgement;
    }
}