abstract class Page {
    protected contents: HTMLElement;

    constructor(contents: HTMLElement) {
        this.contents = contents;
    }

    protected abstract render(): void;

    protected abstract bindingEvents(): void;
  
    public init(): void {
        this.render();
        this.bindingEvents();
    }
}
