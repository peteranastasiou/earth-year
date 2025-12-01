import "./style.css";
import Alpine from "alpinejs";
import { DateTime, Duration, Interval } from "luxon";
import { Era, eras } from "./eras";

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

  // Eras of the earth
  eras: Era[];
  currentEraIndex: number;
  currentEraPercentage: number;

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
    eras,
    currentEraIndex: 0,
    currentEraPercentage: 0,
    startLocal: "",
    endLocal: "",

    init() {
      // Run the cycle
      setInterval(() => this.tick(), 100);  // todo wait until current loop is finished first, don't bank up
    },

    yearClicked() {
      // Cycle through units
      this.units = this.units === Units.MA ? Units.YEARS : this.units + 1;
    },

    // Format as earth year
    formatYear(unit: number, suffix: string) {
      this.earthYearDisplay =
        Math.round(this.earthYear / unit).toLocaleString() + suffix;
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

      // Check if the era has changed
      let era = this.eras[this.currentEraIndex];
      while ( this.earthYear < era.endYear ) {
        this.currentEraIndex ++;
        era = this.eras[this.currentEraIndex];
      }

      // Calculate time of start and end of current era
      const earthYearToLocalTime = (earthYear: number) => {
        const daysRem = earthYear * now.daysInYear / this.earthAge;
        const msRem = daysRem * 86400000;
        return this.endOfYearDate.minus(Duration.fromMillis(msRem));
      }
      this.startLocal = earthYearToLocalTime(era.startYear).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
      this.endLocal = earthYearToLocalTime(era.endYear).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);

      // Check how far through the current era we are
      this.currentEraPercentage = 100 * (era.startYear - this.earthYear) / (era.startYear - era.endYear);
      
      switch (this.units) {
        case Units.YEARS:
          this.formatYear(1, " yrs ago");
          break;

        case Units.KA:
          this.formatYear(1000, " ka");
          break;

        case Units.MA:
          this.formatYear(1000_000, " Ma");
          break;
      }
    },
  }),
);

Alpine.start();
