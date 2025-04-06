import "./style.css";
import Alpine from "alpinejs";
import { DateTime, Interval } from "luxon";

window.Alpine = Alpine;

enum Units {
  YEARS = 0,
  KA,
  MA,
}

interface AppData {
  // Current scaled year of the earth
  earthYear: number;
  earthYearDisplay: string;
  units: Units;

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
    earthYear: 0,
    earthYearDisplay: "",
    units: Units.YEARS,
    earthAge: 4.543 * 1000_000_000,
    endOfYearDate: DateTime.now().endOf("year"),

    init() {
      // Run every 20 ms
      setInterval(() => this.tick(), 20);
    },

    yearClicked() {
      // Cycle through units
      this.units = this.units === Units.MA ? Units.YEARS : this.units + 1;
    },

    tick() {
      const now = DateTime.now();

      // Days left in the year
      const daysLeft: number = Interval.fromDateTimes(
        now,
        this.endOfYearDate,
      ).length("days");

      // Portion of year left
      const portionLeft = daysLeft / now.daysInYear;
      this.earthYear = this.earthAge * portionLeft;

      // Format as earth year
      const formatYear = (unit: number, suffix: string) => {
        this.earthYearDisplay =
          Math.round(this.earthYear / unit).toLocaleString() + suffix;
      };

      switch (this.units) {
        case Units.YEARS:
          formatYear(1, " years ago");
          break;

        case Units.KA:
          formatYear(1000, " ka");
          break;

        case Units.MA:
          formatYear(1000_000, " Ma");
          break;
      }
    },
  }),
);

Alpine.start();
