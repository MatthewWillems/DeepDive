class Calendar {
    constructor(monthsSelector, calendarSelector) {
      this.months = document.querySelectorAll(monthsSelector);
      this.calendar = document.querySelector(calendarSelector);
    }
  
    init() {
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
        });
      });
    }
  
    createMonthContainer() {
      const monthContainer = document.createElement("div");
      monthContainer.classList.add("month-container");
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
  