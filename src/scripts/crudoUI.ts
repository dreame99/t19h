// carousel
class Carousel {
    private carousel: HTMLElement = document.createElement("article");
    private list: HTMLElement = document.createElement("div");
    private running: number | undefined;
    private x: number = 0;
    private isDrag: boolean = false;
    private gap: number = 20;

    constructor() {
        this.carousel.classList.add("carousel");
        this.list.classList.add("list");
        this.carousel.appendChild(this.list);
        
        var originX: number;
        var prevX: number;
        
        this.carousel.addEventListener("mousedown", e => {
            console.log("mousedown");
            this.isDrag = true;
            originX = this.x;
            prevX = e.clientX;
        });

        window.addEventListener("mousemove", e => {
            if( this.isDrag ) {
                console.log("mousemove");
                this.move(originX + e.clientX - prevX);
                originX += this.updateItem();
            }
        });

        window.addEventListener("mouseup", () => {
            console.log("mouseup");
            this.isDrag = false;
        });

        //this.play();
    }

    public getAllItem(): Element[] {
        return [...this.list.children];
    }
    public getItem(idx: number): Element {
        return this.list.children[Math.min(this.list.children.length - 1, Math.max(0, idx))];
    }
    public getFirstItem(): Element | null {
        return this.getItem(0);
    }
    public getLastItem(): Element | null {
        return this.getItem(this.getAllItem().length - 1);
    }
    public getPrevItem(): Element | null {
        var prevItem: Element | null = null;

        for( var i = 0; i < this.getAllItem().length; i++ ) {
            var item = this.getItem(i);
            if( item.getBoundingClientRect().x - this.carousel.getBoundingClientRect().x >= 0 ) {
                prevItem = this.getItem(i - 1);
                break;
            }
        }

        return prevItem;
    }
    public getNextItem(): Element | null {
        var nextItem: Element | null = null;

        for( var i = this.getAllItem().length - 1; i >= 0; i-- ) {
            var item = this.getItem(i);
            if( item.getBoundingClientRect().x + item.clientWidth <= this.carousel.getBoundingClientRect().x + this.carousel.clientWidth ) {
                nextItem = this.getItem(i - 1);
                break;
            }
        }

        return nextItem;
    }

    public isFlood(): boolean {
        var first: Element | null = this.getFirstItem();
        var last: Element | null = this.getLastItem();

        if( first && last ) {
            return last.getBoundingClientRect().x + last.clientWidth - first.getBoundingClientRect().x > this.carousel.clientWidth;
        }

        return false;
    }

    private move(value: number): void {
        this.list.style.transform = `translateX(${this.x = value}px)`;
    }

    private updateItem(): number {
        var first: Element | null = this.getFirstItem();
        var last: Element | null = this.getLastItem();
        var moveX: number = 0;

        if( this.isFlood() && first && last ) {
            if( this.x >= 0 ) {
                moveX = -(last.clientWidth + this.gap);
                this.list.insertBefore(last.cloneNode(true), first);
                this.list.removeChild(last);
            } else if( last.getBoundingClientRect().x + last.clientWidth <= this.carousel.getBoundingClientRect().x + this.carousel.clientWidth ) {
                moveX = last.clientWidth + this.gap;
                this.list.appendChild(first.cloneNode(true));
                this.list.removeChild(first);
            }

            this.move(this.x + moveX);
        }

        return moveX;
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

    public isRunning(): boolean {
        return this.running != undefined;
    }

    public play(): void {
        if( !this.running ) {
            this.running = setInterval(() => {
                this.move(this.x - 1);
                this.updateItem();
            }, 1);
        }
    }

    public stop(): void {
        clearInterval(this.running);
        this.running = undefined;
    }
}

// always visible header

// layer popup

// move usign drag
