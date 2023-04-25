class Calendar {
  constructor(monthsSelector, calendarSelector) {
    this.months = document.querySelectorAll(monthsSelector);
    this.calendar = document.querySelector(calendarSelector);
    this.selectedDate = null;
    this.formWrapper = document.querySelector(".forms__wrapper");
    this.formDate = document.querySelector(".form__date");
    this.saveButton = document.querySelector(".saveButton");
    this.returnButton = document.querySelector(".returnButton"); // Select the returnButton element
  }

  init() {
    this.formWrapper.style.display = "none";
    this.formDate.textContent = ""; // Clear form__date content

    // Add a click event listener to the returnButton
    this.returnButton.addEventListener("click", () => {
      this.formWrapper.style.display = "none";
      this.calendar.style.display = "block";
      this.months.forEach((month) => {
        month.style.display = "block";
      });
    });

    this.months.forEach((month) => {
      month.addEventListener("click", () => {
        const monthId = parseInt(month.dataset.month);
        const monthName = month.textContent;

        const monthContainer = this.createMonthContainer();
        const monthHeader = this.createMonthHeader(monthName);
        const daysContainer = this.createDaysContainer();
        const daysInMonth = new Date(2023, monthId + 1, 0).getDate();

        for (let i = 1; i <= daysInMonth; i++) {
          const day = this.createDay(i);
          daysContainer.appendChild(day);
        }

        monthContainer.appendChild(monthHeader);
        monthContainer.appendChild(daysContainer);
        this.calendar.innerHTML = "";
        this.calendar.appendChild(monthContainer);

        const days = monthContainer.querySelectorAll(".day"); // Query only within monthContainer
        days.forEach((day) => {
          day.addEventListener("click", () => {
            this.selectedDate = new Date(2023, monthId, parseInt(day.textContent));
            this.calendar.style.display = "none";
            this.months.forEach((month) => {
              month.style.display = "none";
            });

            this.formDate.textContent = `${day.textContent} ${monthName} 2023`; // Update form__date content
            this.formWrapper.style.display = "block";
            const success = localStorage.getItem(this.selectedDate.toDateString());
            const textarea = this.formWrapper.querySelector(".form__textArea");
            textarea.value = success || "";
          });
        });
      });
    });

    this.saveButton.addEventListener("click", () => {
      const textarea = this.formWrapper.querySelector(".form__textArea");
      const success = textarea.value.trim();
      if (success !== "") {
        localStorage.setItem(this.selectedDate.toDateString(), success);
        alert("Success saved!");
      } else {
        alert("Please enter a success.");
      }
    });
  }

  createMonthContainer() {
    const monthContainer = document.createElement("div");
    monthContainer.classList.add("month__container");
    return monthContainer;
  }

  createMonthHeader(monthName) {
    const monthHeader = document.createElement("h2");
    monthHeader.classList.add("month__h2");
    monthHeader.textContent = monthName;
    return monthHeader;
  }

  createDaysContainer() {
    const daysContainer = document.createElement("div");
    daysContainer.classList.add("days");
    return daysContainer;
  }

  createDay(dayNumber) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.textContent = dayNumber;
    return day;
  }
}

const calendar = new Calendar(".month", ".calendar");
calendar.init();
