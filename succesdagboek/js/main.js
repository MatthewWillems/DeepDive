class Calendar {
  constructor(monthsSelector, calendarSelector) {
    this.months = document.querySelectorAll(monthsSelector);
    this.calendar = document.querySelector(calendarSelector);
    this.selectedDate = null;
    this.formWrapper = document.querySelector(".forms__wrapper");
    this.formDate = document.querySelector(".form__date");
    this.addButton = document.querySelector(".addButton");
  }

  init() {
    this.formWrapper.style.display = "none";
    this.formDate.textContent = ""; // Clear form__date content

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
          });
        });
      });
    });

    this.addButton.addEventListener("click", () => {
      const textarea = this.createTextarea(); // Create textarea with custom class
      this.formWrapper.appendChild(textarea);
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

  createTextarea() {
    const textarea = document.createElement("textarea");
    textarea.classList.add("form__textArea"); // Add a custom class for the new textarea

    // Set the textarea as a flex item and center it vertically and horizontally
    textarea.style.display = "flex";
    textarea.style.alignItems = "center";
    textarea.style.justifyContent = "center";

    return textarea;
  }
}

const calendar = new Calendar(".month", ".calendar");
calendar.init();
