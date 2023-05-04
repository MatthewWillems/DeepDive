
class Header {
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
  footer;

  constructor(placeToRenderMain, footer) {
    this.footer = footer;
    this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

    this.mainElement = document.createElement("main");
    this.mainElement.classList = "main";



    this.cardsData = [
      { text: "Goed", color: "groen" },
      { text: "twijfel", color: "geel" },
      { text: "twijfel", color: "oranje" },
      { text: "slecht", color: "rood" }
    ];
  
    for (let i = 0; i < this.cardsData.length; i++) {
      this.card = new Card(
        this.cardsData[i].text,
        this.cardsData[i].color,
        this.footer,
        this.mainElement
      );
      
      this.mainElement.appendChild(this.card.render());
    }
    
  }

  render() {
    this.placeToRenderMain.appendChild(this.mainElement);
  }

  
}


class Card {
  footer;
  isClicked = false;

  constructor(text, color, footer, mainElement) {
    this.mainElement = mainElement;
    
    this.footerElement = footer;

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


    this.addClickListener(); 
    this.ClickListener();

   
  }

  
  addClickListener() {
    this.sectionElement.addEventListener("click", () => {
      this.footer = document.querySelector(".footer");
      this.footer.style.display = "inline";
      this.footer.scrollIntoView({ behavior: 'smooth' });
    });
    this.sectionElement.addEventListener("click", (event) => {
      const cards = document.querySelectorAll(".cards");
      cards.forEach((card) => {
  
        // Hide all cards except the clicked card
        if (card !== this.sectionElement) {
          card.style.display = "none";
          this.mainElement.style.gap = "0";
   
        }
      });
    });
    
  }

  ClickListener() {
    this.sectionElement.addEventListener("click", () => {
      // Set isClicked to true when the card is clicked
      this.isClicked = true;

      this.footer = document.querySelector(".footer");
      this.footer.style.display = "inline";
      this.footer.scrollIntoView({ behavior: 'smooth' });
    });
  }
  

  


  render() {
    return this.linkElement;
  }

}


class Footer {
  footerElement;

  constructor(placeToRenderFooter) {

    this.placeToRenderFooter = document.getElementsByTagName(placeToRenderFooter)[0];

    this.footerElement = document.createElement("footer")
    this.footerElement.classList = "footer";

    this.sectionFooterElement1 = document.createElement("section");
    this.sectionFooterElement1.classList = "footer__section";

    this.sectionFooterElement1Text = document.createElement("h3");
    this.sectionFooterElement1Text.classList = "footer__text";
    this.sectionFooterElement1Text.innerText = "Signalen/gewaarwordingen";

    this.inputElement = document.createElement("form");
    this.inputElement.classList = "input";

    this.inputTextAreaElement = document.createElement("textarea");
    this.inputTextAreaElement.classList = "input__textarea";
    

    this.sectionFooterElement2Text = document.createElement("h3");
    this.sectionFooterElement2Text.classList = "footer__text";
    this.sectionFooterElement2Text.innerText = "Acties/maatregelen";

    this.inputElement2 = document.createElement("form");
    this.inputElement2.classList = "input";

    this.inputTextAreaElement2 = document.createElement("textarea");
    this.inputTextAreaElement2.classList = "input__textarea";


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
    this.sectionButtonSaveIElement.classList = "fa-regular fa-floppy-disk";


    this.sectionButtonDownload = document.createElement("button")
    this.sectionButtonDownload.classList = "footer__ButtonSave"
    this.sectionButtonDownload.innerText = "Download";

    this.sectionButtonDownloadIElement = document.createElement("i");
    this.sectionButtonDownloadIElement.classList = "  fa-solid fa-download";


  //   this.savedText = localStorage.getItem('inputText');
  //   if (this.savedText) {
  //     this.inputTextAreaElement.value = this.savedText;
      
  //   }

  //   // Add an event listener to the textarea to save the input text to local storage
  //   this.inputTextAreaElement.addEventListener('input', (event) => {
  //     this.inputText = event.target.value;
  //     localStorage.setItem('inputText', this.inputText);
     
  //   });

  // this.inputTextAreaElement2.addEventListener("input", (event) => {
  //     const inputValue = event.target.value;
  //     localStorage.setItem("inputText", inputValue);
  //   });

    const savedText1 = localStorage.getItem('inputText');
    const savedText2 = localStorage.getItem('inputText2');

  // If there is saved text, set the text of the textareas to the saved text
  if (savedText1) {
    this.inputTextAreaElement.value = savedText1;
  }
  
  if (savedText2) {
    this.inputTextAreaElement2.value = savedText2;
  }

  // Add an event listener to the save button to save the input text to local storage
  this.sectionButtonSave.addEventListener('click', (event) => {
    event.preventDefault();
    const inputText1 = this.inputTextAreaElement.value;
    const inputText2 = this.inputTextAreaElement2.value;
    localStorage.setItem('inputText1', inputText1);
    localStorage.setItem('inputText2', inputText2);
  });

    this.sectionButtonReset.addEventListener('click', (event) => {
      localStorage.clear();
      // Reset text areas
      this.inputTextAreaElement.value = "";
      this.inputTextAreaElement2.value = "";
    });

    
  }

  render() {

    this.placeToRenderFooter.appendChild(this.footerElement)

    this.footerElement.appendChild(this.sectionFooterElement1);
    this.sectionFooterElement1.appendChild(this.sectionFooterElement1Text);
    this.sectionFooterElement1.appendChild(this.inputElement);
    this.inputElement.appendChild(this.inputTextAreaElement);


    this.sectionFooterElement1.appendChild(this.sectionFooterElement2Text);
    this.sectionFooterElement1.appendChild(this.inputElement2);
    this.inputElement2.appendChild(this.inputTextAreaElement2);


    this.footerElement.appendChild(this.sectionFooterElement2);
    this.sectionFooterElement2.appendChild(this.sectionButtonReset);
    this.sectionButtonReset.appendChild(this.sectionButtonrResetIElement);

    this.footerElement.appendChild(this.sectionFooterElement2);
    this.sectionFooterElement2.appendChild(this.sectionButtonSave);
    this.sectionButtonSave.appendChild(this.sectionButtonSaveIElement);

    this.footerElement.appendChild(this.sectionFooterElement2);
    this.sectionFooterElement2.appendChild(this.sectionButtonDownload);
    this.sectionButtonDownload.appendChild(this.sectionButtonDownloadIElement);
  }
}

class App {

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