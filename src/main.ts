import "./style.css";
import Alpine from "alpinejs";
import { DateTime, Interval } from "luxon";

window.Alpine = Alpine;

interface AppData {
  // Current scaled year of the earth
  earthYear: string;

  // Age of Earth in years
  earthAge: number;

  // This is the instant before midnight at the end of the current year
  endOfYearDate: DateTime;

  // Allow any additional properties
  [key: string]: any;
}

Alpine.data(
  "app",
  (): AppData => ({
    earthYear: "",
    earthAge: 4.543 * 10 ** 9,
    endOfYearDate: DateTime.now().endOf('year'),

    init() {
      // Run every 20 ms
      setInterval(() => this.tick(), 20);
    },

    destroy() {
      console.log("Goodbye");
    },

    tick() {
      const now = DateTime.now();

      // Days left in the year
      const daysLeft: number = Interval.fromDateTimes(now, this.endOfYearDate).length('days');

      // Portion of year left
      const portionLeft = daysLeft / now.daysInYear;

      this.earthYear = Math.round(this.earthAge * portionLeft).toLocaleString() + " years ago";
    },
  }),
);

Alpine.start();
