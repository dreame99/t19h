class Main {
    private container: HTMLElement | null;

    constructor(container: string) {
        this.container = document.getElementById(container);
    }

    private updateContents(): void {
        if( this.container ) {
            this.container.innerHTML = "";
        }
    }
  
    public init(): void {
        this.updateContents();
    }
}