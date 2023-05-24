class Header {
    headerElement;
    imageElement;
    headerTitleElement;
    placeToRenderHeader;

    constructor(placeToRenderHeader) {
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


class EventCard {
    // name = "";
    htmlElement = undefined;

    constructor(placeToRenderEventCard,gebeurtenis) {
        // this.name = newName;
        this.gebeurtenis = gebeurtenis;

        //

        this.placeToRenderEventCard = document.getElementsByTagName(placeToRenderEventCard)[0];
        this.mainElement = document.createElement("main");

        this.articleElement = document.createElement("article");
        this.articleElement.classList = "addEventCard";
        this.articleElement.id = "js--addEventCard";
        this.articleElement.onclick = this.onEventCardButtonClicked;


        this.buttonElement = document.createElement("button");
        this.buttonElement.classList = "addEventCard__button";
        this.buttonElement.innerText = "+";
    }

    render() {
        this.placeToRenderEventCard.appendChild(this.mainElement);
        this.mainElement.appendChild(this.articleElement);
        this.articleElement.appendChild(this.buttonElement);
    }

    onEventCardButtonClicked = () => {
        this.gebeurtenis.render();
      //
    }

}

class EventGebeurtenis{
    htmlElement = undefined;
    constructor(){
        this.htmlElement = document.createElement("article");

        this.articleElement = document.createElement("article");
        this.articleElement.classList = "zeventCard__gebeurtenis";
        this.articleElement.innerText = "Wat is er gebeurd?";

        this.inputElement = document.createElement("input");
        this.inputElement.type = "text";
        this.inputElement.id = "event";
        this.inputElement.name = "event";


        this.buttonElement = document.createElement("button");
        this.buttonElement.classList = "nextPage__button";
        this.buttonElement.innerText = "Volgende";
        this.inputElement.id = "js--addEventCard";

    }

    render(){
        this.articleElement.appendChild(this.inputElement);
        document.querySelector("body").appendChild(this.articleElement);

    }
}

/* <article class="eventCard--gebeurtenis">
            <h1>Wat is er gebeurd?</h1>
            <input type="text" id="event" name="event"><br><br>
            <button class="addEventCard__button--volgende" id="js--addEventCard">Volgende</button>
        </article> */

const x = new Header("body");
x.render();
const eventGebeurtenis = new EventGebeurtenis();
const eventCard = new EventCard("body",eventGebeurtenis);
eventCard.render();


// const eventCard = new EventCard("newEventCard", eventCG);

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