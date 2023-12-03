window.addEventListener("scroll", () => {
    var headerContainer: HTMLElement | null = document.getElementById("headerContainer");
    var contentsContainer: HTMLElement | null = document.getElementById("contentsContainer");

    if( window.scrollY > 72 ) {
        if( headerContainer ) {
            headerContainer.classList.add("fixed");
        }
        if( contentsContainer ) {
            contentsContainer.classList.add("fixed");
        }
    } else {
        if( headerContainer ) {
            headerContainer.classList.remove("fixed");
        }
        if( contentsContainer ) {
            contentsContainer.classList.remove("fixed");
        }
    }
});

function toDateString(date: string): string {
    if( date.length == 8 ) {
        return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8);
    }
    
    return date;
}