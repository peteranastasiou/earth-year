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

const DATE_FORMAT = DateTime.DATETIME_SHORT_WITH_SECONDS;

interface AppData {
  // Current scaled year of the earth
  earthYear: number;
  earthYearDisplay: string;
  units: Units;

  // Age of Earth in years
  earthAge: number;

  // Eras of the earth
  eras: Era[];

  // The current local time and era of the earth year
  currentTime: string;
  currentEra?: Era;
  currentEraIndex: number;
  currentEraPercentage: number;

  // Start and end of current era in local time
  startLocal: string;
  endLocal: string;

  // Allow user to bump days left and right to offset different eras
  offsetDays: number;

  // Keep track of how often we run
  tickCount: number;
  tickPeriod: number;
  earthYearsPerTick: number;

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
    eras,
    currentTime: "",
    currentEra: undefined,
    currentEraIndex: 0,
    currentEraPercentage: 0,
    offsetDays: 0,
    startLocal: "",
    endLocal: "",
    tickCount: 0,
    tickPeriod: 100, // ms
    earthYearsPerTick: 0,

    lastYear: 0,

    init() {
      // Calculate how many years to increment every cycle:
      const earthYearsPerSecond =
        this.earthAge / DateTime.now().daysInYear / 24 / 60 / 60;
      const ticksPerSecond = 1000 / this.tickPeriod;
      this.earthYearsPerTick = earthYearsPerSecond / ticksPerSecond;
      console.log(this.earthYearsPerTick);

      // Run the cycle
      setInterval(() => this.tick(), this.tickPeriod);
      this.tick(); // the first render
    },

    yearClicked() {
      // Cycle through units
      this.units = this.units === Units.MA ? Units.YEARS : this.units + 1;
    },

    resetOffsetDays() {
      this.offsetDays = 0;

      // force a re-calculation now:
      this.tickCount = 0;
      this.tick();
    },

    incrementOffsetDays(n: number) {
      this.offsetDays += n;

      // force a re-calculation now:
      this.tickCount = 0;
      this.tick();
    },

    renderYear() {
      console.log(this.lastYear - this.earthYear);
      this.lastYear = this.earthYear;
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

    // Format as earth year
    formatYear(unit: number, suffix: string) {
      this.earthYearDisplay =
        Math.round(this.earthYear / unit).toLocaleString() + suffix;
    },

    tick() {
      // Perform just a quick calculation most times, do the full render less frequently
      if (this.tickCount++ % 20 != 0) {
        // Instead of going for the full hassle of recalculating everything, just
        // decrement the known number of earth years most ticks
        // This is an optimisation
        this.earthYear = Math.max(0, this.earthYear - this.earthYearsPerTick);
        this.renderYear();
        return;
      }

      const now = DateTime.now().plus(
        Duration.fromObject({ days: this.offsetDays }),
      );
      this.currentTime = now.toLocaleString(DATE_FORMAT);

      // This is the instant before midnight at the end of the current year
      const endOfYearDate = now.endOf("year");

      // Days left in the year
      const daysLeft: number = Interval.fromDateTimes(
        now,
        endOfYearDate,
      ).length("days");

      // Portion of year left
      const portionLeft = daysLeft / now.daysInYear;
      this.earthYear = this.earthAge * portionLeft;

      // Check if the era has changed
      let era = this.eras[this.currentEraIndex];
      while (
        this.earthYear < era.endYear &&
        this.currentEraIndex < this.eras.length - 1
      ) {
        this.currentEraIndex++;
        era = this.eras[this.currentEraIndex];
      }
      while (this.earthYear > era.startYear && this.currentEraIndex > 0) {
        this.currentEraIndex--;
        era = this.eras[this.currentEraIndex];
      }
      this.currentEra = era;

      // Calculate time of start and end of current era
      const earthYearToLocalTime = (earthYear: number) => {
        const daysRemaining = (earthYear * now.daysInYear) / this.earthAge;
        const msRemaining = daysRemaining * 86400000;
        const date = endOfYearDate.minus(Duration.fromMillis(msRemaining));
        return date.toLocaleString(DATE_FORMAT);
      };
      this.startLocal = earthYearToLocalTime(era.startYear);
      this.endLocal = earthYearToLocalTime(era.endYear);

      // Check how far through the current era we are
      this.currentEraPercentage =
        (100 * (era.startYear - this.earthYear)) /
        (era.startYear - era.endYear);

      this.renderYear();
    },
  }),
);

Alpine.start();
