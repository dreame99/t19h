// carousel
class Carousel {
    private carousel: HTMLElement = document.createElement("article");
    private list: HTMLElement = document.createElement("div");
    private running: number | undefined;
    private x: number = 0;

    constructor() {
        this.carousel.classList.add("carousel");
        this.list.classList.add("list");

        this.carousel.appendChild(this.list);
    }

    public render(container: HTMLElement): void {
        container.appendChild(this.carousel);
    }

    public append(child: HTMLElement): void {
        this.list.appendChild(child);
    }

    public remove(child: HTMLElement): void {
        this.list.removeChild(child);
    }

    public getElement(): HTMLElement {
        return this.carousel;
    }

    public run(on: boolean): void {
        if( on ) {
            var lastChild = this.list.lastChild as HTMLElement;
            if( lastChild && this.carousel.clientWidth < lastChild.getBoundingClientRect().x + lastChild.getBoundingClientRect().width ) {
                var speed = 0.2 as number;
    
                this.running = setInterval(() => {
                    this.x -= speed;
                    this.list.style.transform = `translateX(${this.x}%)`;
    
                    Array.from(this.list.children).forEach(child => {
                        if( -child.getBoundingClientRect().x >= child.getBoundingClientRect().width ) {
                            this.x += (child.getBoundingClientRect().width + 20) / this.list.getBoundingClientRect().width * 100;
                            this.list.style.transform = `translateX(${this.x}%)`;
    
                            this.list.removeChild(child);
                            this.list.appendChild(child);
                        }
                    });
                }, 16);
            }
        } else {
            clearInterval(this.running);
            this.running = undefined;
        }
    }

    public isRunning(): boolean {
        return this.running != undefined;
    }
}

// always visible header

// layer popup

// move usign drag
