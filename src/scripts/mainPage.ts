class MainPage {
    private container: HTMLElement | null;

    constructor(container: string) {
        this.container = document.getElementById(container);
    }

    private render(): void {
        if( this.container ) {
            this.container.innerHTML = "";
        }
    }
  
    public init(): void {
        this.render();
    }
}