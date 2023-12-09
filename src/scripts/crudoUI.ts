/**
 * carousel element.
 * rotating slide.
 */
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

/**
 * Create page container elements based on the total number and the number of displays on a page
 */
class PageContainer {
    private pageContainer: HTMLElement = document.createElement("article");
    private leftButton: HTMLElement = document.createElement("button");
    private rightButton: HTMLElement = document.createElement("button");
    private totalCount: number = 90;
    private pageCount: number = 9;
    private maxPage: number = 10;
    private phase: number = 1;
    private page: number|undefined;
    private selectedPos: number|undefined = 1;
    private callback: Function|undefined;

    constructor(callback?: Function) {
        this.callback = callback;
        this.pageContainer.classList.add("page-container");
        
        this.leftButton.classList.add("left-button");
        this.leftButton.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M17 4 L7 12 L17 20"></path>
            </svg>
        `;
        this.leftButton.onclick = () => this.updatePage(this.phase - 1);
        this.pageContainer.appendChild(this.leftButton);
        
        this.rightButton.classList.add("right-button");
        this.rightButton.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M7 4 L17 12 L7 20"></path>
            </svg>
        `;
        this.rightButton.onclick = () => this.updatePage(this.phase + 1);
        this.pageContainer.appendChild(this.rightButton);

        this.updatePage(this.phase);
    }

    public setTotalCount(totalCount: number) {
        this.totalCount = Math.max(1, totalCount);
        this.updatePage(this.phase);
    }

    public setPageCount(pageCount: number) {
        this.pageCount = Math.max(1, pageCount);
        this.updatePage(this.phase);
    }

    public getPage(): number|undefined {
        return this.page;
    }

    private updatePage(phase: number): void {
        var maxPhase = Math.max(1, Math.ceil(this.totalCount / this.pageCount / this.maxPage));

        this.phase = Math.max(1, Math.min(maxPhase, phase));

        [...this.pageContainer.getElementsByClassName("page-count")].forEach(pageCount => {
            pageCount.remove();
        });

        var count = Math.min(this.maxPage, this.totalCount / this.pageCount - (this.phase - 1) * this.maxPage);
        for( var i = 0; i < count; i++ ) {
            let page = document.createElement("div");
            page.classList.add("page-count");
            page.innerHTML = "" + (i + 1 + (this.phase - 1) * this.maxPage);
            this.pageContainer.insertBefore(page, this.rightButton);
            page.addEventListener("click", () => {
                if( !Number.isNaN(Number(page.innerHTML)) ) {
                    var pageNum: number = Number(page.innerHTML);
                    [...this.pageContainer.getElementsByClassName("page-count")].forEach(pageCount => pageCount.classList.remove("selected"));
                    page.classList.add("selected");
                    this.selectedPos = pageNum - (this.phase - 1) * this.maxPage;

                    this.page = pageNum;

                    if( this.callback ) {
                        this.callback(this.page);
                    }
                }
            });
        }

        if( typeof this.selectedPos == "number" ) {
            var selectedPageElems = this.pageContainer.getElementsByClassName("page-count");
            var selectedPageElem = selectedPageElems[Math.min(this.selectedPos, selectedPageElems.length) - 1];
            selectedPageElem?.classList.add("selected");
        }
    }

    public getElement(): HTMLElement {
        return this.pageContainer;
    }
}

// always visible header

// layer popup

// move usign drag
