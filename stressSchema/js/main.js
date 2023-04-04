class Card {
  constructor(element, footer) {
    this.element = element;
    this.footer = footer;
    this.addClickListener();
  }

  addClickListener() {
    this.element.addEventListener('click', () => {
      this.footer.style.display = 'inline';
    });
  }
}

const cards = document.querySelectorAll("#js--cards");

cards.forEach(card => {
  card.addEventListener("click", () => {
    // Hide all other cards
    cards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.style.display = "none";
       


      }
    });

    const main = document.getElementById('js--main');
    main.style.gap = '0';

    // Show the footer
    const footer = document.getElementById("js--footer");
    footer.style.display = "inline";
  });
});



