// class Card {
//   constructor(element, footer) {
//     this.element = element;
//     this.footer = footer;
//     this.addClickListener();
//   }

//   addClickListener() {
//     this.element.addEventListener('click', () => {
//       this.footer.style.display = 'inline';
//     });
//   }
// }

// const cards = document.querySelectorAll("#js--cards");

// cards.forEach(card => {
//   card.addEventListener("click", () => {
//     // Hide all other cards
//     cards.forEach(otherCard => {
//       if (otherCard !== card) {
//         otherCard.style.display = "none";
       


//       }
//     });
//     const main = document.getElementById('js--main');
//     main.style.gap = '0';

//     // Show the footer
//     const footer = document.getElementById("js--footer");
//     footer.style.display = "inline";
//   });
// });

class Header{
  headerElement;
  headerFigureElement;
  headerImgElement;
  headerTitle;

  constructor(placeToRenderHeader) {
    this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

    this.headerElement = document.createElement("header");
    this.headerElement.classList = "header";

    this.headerFigureElement = document.createElement("figure");
    this.headerFigureElement.classList = "header__figure";

    this.headerImgElement = document.createElement("img");
    this.headerImgElement.classList = "header__doesburg";
    this.headerImgElement.src = "./img/doesburg.png";

    this.headerTitle = document.createElement("h1");
    this.headerTitle.classList = "header__text"
    this.headerTitle.innerText = "Stress stoplicht"

  }

  render() {
    this.placeToRenderHeader.appendChild(this.headerElement);
    this.headerElement.appendChild(this.headerFigureElement);
    this.headerFigureElement.appendChild(this.headerImgElement);
    this.headerElement.appendChild(this.headerTitle);
    
  }
  
}

class StressMain {
  placeToRenderMain;

  constructor(placeToRenderMain) {
    this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

    this.mainElement = document.createElement("main");
    this.mainElement.classList = "main";

   

    // Create an instance of the cards class for each card
    this.cardsData = [
      { text: "Goed", color: "groen" },
      { text: "twijfel", color: "geel" },
      { text: "twijfel", color: "oranje" },
      { text: "slecht", color: "rood" }
    ];
    for (let i = 0; i < this.cardsData.length; i++) {
      this.card = new Card(this.cardsData[i].text, this.cardsData[i].color);
      this.mainElement.appendChild(this.card.render());
    }


  }

  render() {
    this.placeToRenderMain.appendChild(this.mainElement);
  }
}

class Card {
  constructor(text, color) {
    this.linkElement = document.createElement("a");
    this.linkElement.classList = "Scroll__Link";
    this.linkElement.href = "#js--footer";

    this.sectionElement = document.createElement("section");
    this.sectionElement.classList = "cards";

    this.cardElement = document.createElement("figure");
    this.cardElement.classList = "cards__card cards__card--" + color;

    this.circleElement = document.createElement("div");
    this.circleElement.classList = "cards__circle cards__circle--" + color;

    this.textElement = document.createElement("h3");
    this.textElement.classList = "cards__text";
    this.textElement.innerText = text;

    this.cardElement.appendChild(this.circleElement);
    this.sectionElement.appendChild(this.textElement);
    this.sectionElement.appendChild(this.cardElement);
    this.linkElement.appendChild(this.sectionElement);
  }

  render() {
    return this.linkElement;
  }
}


class Footer{

  constructor(placeToRenderFooter) {

    this.placeToRenderFooter = document.getElementsByTagName(placeToRenderFooter)[0];

    this.footerElement = document.createElement("footer")
    this.footerElement.classList = "footer";

    this.sectionFooterElement1 = document.createElement("section");
    this.sectionFooterElement1.classList = "footer__section";

    this.sectionFooterElement1Text = document.createElement("h3");
    this.sectionFooterElement1Text.classList = "footer__text";
    this.sectionFooterElement1Text.innerText = "Tell us about your experience";

    this.inputElement = document.createElement("form");
    this.inputElement.classList = "input";

    this.inputTextAreaElement = document.createElement("textarea");
    this.inputTextAreaElement.classList = "input__textarea";

    this.sectionFooterElement2 = document.createElement("section");
    this.sectionFooterElement2.classList = "footer__Buttons";

    this.sectionButtonReset = document.createElement("button");
    this.sectionButtonReset.classList = "footer__ButtonSave";

    this.sectionButtonrResetIElement = document.createElement("i");
    this.sectionButtonrResetIElement.classList = "fa-solid fa-rotate-right";
    this.sectionButtonReset.innerText = "Reset";

    this.sectionButtonSave = document.createElement("button");
    this.sectionButtonSave.classList = "footer__ButtonSave";
    this.sectionButtonSave.innerText = "Save";

    this.sectionButtonSaveIElement = document.createElement("i");
    this.sectionButtonSaveIElement.classList = "fa-solid fa-download";

  
  }

  render() {
    this.placeToRenderFooter.appendChild(this.footerElement)

    this.footerElement.appendChild(this.sectionFooterElement1);
    this.sectionFooterElement1.appendChild(this.sectionFooterElement1Text);
   

    this.inputElement.appendChild(this.inputTextAreaElement);
    this.sectionFooterElement1.appendChild(this.inputElement);

    this.footerElement.appendChild(this.sectionFooterElement2);

    this.sectionFooterElement2.appendChild(this.sectionButtonReset);
    this.sectionButtonReset.appendChild(this.sectionButtonrResetIElement);

    this.sectionFooterElement2.appendChild(this.sectionButtonSave);
   
    this.sectionButtonSave.appendChild(this.sectionButtonSaveIElement);
  }
}












class App{

  header;
  main;

  constructor() {
    this.header = new Header("body");
    this.main = new StressMain("body");
    this.footer = new Footer("body");
    
    this.header.render();
    this.main.render();
    this.footer.render();
    
  }
}
const app = new App();

