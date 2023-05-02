class EventCard {
    name = "";
    htmlElement = undefined;

    constructor(newName, newHTMLElement) {
        this.name = newName;
        this.htmlElement = newHTMLElement;
        this.htmlElement.onclick = this.onEventCardButtonClicked;
    }

    onEventCardButtonClicked = () => {
        console.log("geklikt");
        this.htmlElement.style.display = "none";
        this.htmlElement.classList.add("eventCard--gebeurtenis");
    }
    
}

const eventCard = new EventCard("newEventCard",document.getElementById("js--addEventCard"));

class EventCardGebeurtenis{

    
}