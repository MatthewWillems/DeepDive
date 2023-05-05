class Header {
    headerElement;
    imageElement;
    headerTitleElement;
    placeToRenderHeader;

    constructor(placeToRenderHeader){
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];
        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.imageElement = document.createElement("img");
        this.imageElement.src = '../img/doesburgLogo.png';

        this.headerTitleElement = document.createElement("h1");
        this.headerTitleElement.classList = "header__title";
        this.headerTitleElement.innerText = "Gebeurtenissenschema";
    }

    render() {
        this.placeToRenderHeader.appendChild(this.headerElement);
        this.headerElement.appendChild(this.imageElement);
        this.headerElement.appendChild(this.headerTitleElement);
    }
}

const x = new Header("body");
x.render();

class EventCard {
    name = "";
    htmlElement = undefined;
    gebeurtenis;

    constructor(newName, newHTMLElement, gebeurtenis) {
        this.name = newName;
        this.gebeurtenis = gebeurtenis;
        this.htmlElement = newHTMLElement;
        this.htmlElement.onclick = this.onEventCardButtonClicked;
    }

    onEventCardButtonClicked = () => {
        console.log("geklikt");
        this.htmlElement.style.display = "none";
        this.htmlElement.classList.add("eventCard--gebeurtenis");
        this.gebeurtenis.show();
    }

}


class EventCardGebeurtenis {
    htmlElement;
    constructor(htmlElement){
        this.htmlElement = htmlElement;
        this.htmlElement.style.display = "none";
    }

    show(){
        this.htmlElement.style.display = "flex";
    }

}


const eventCG = new EventCardGebeurtenis(document.getElementsByClassName("eventCard--gebeurtenis")[0]);
const eventCard = new EventCard("newEventCard", document.getElementById("js--addEventCard"),eventCG);

// < body >
//    <header class="header">
//        <img src="/img/doesburgLogo.png" alt="Logo">
//        <h1 class="header__title">Gebeurtenissenschema</h1>
//    </header>
//    <main>
//        <article class="addEventCard" id="js--addEventCard">
//            <button class="addEventCard__button" id="js--addEventCard">+</button>
//        </article>
//        <article class="eventCard--gebeurtenis">
//            <h1>Wat is er gebeurd?</h1>
//            <input type="text" id="event" name="event"><br><br>
//            <button class="addEventCard__button--volgende" id="js--addEventCard">Volgende</button>
//        </article>
//    </main>
// </body>