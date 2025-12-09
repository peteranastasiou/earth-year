import "./style.css";
import Alpine from "alpinejs";
import { DateTime } from "luxon";
import { Era, eras } from "./data/eras";
import { events, PrehistoricEvent } from "./data/events";
import { filter, from, map, take, takeLast } from "rxjs";
import { TimeCalculator } from "./time-calculator";

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

  timeCalculator: TimeCalculator;

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

  // Event tracking
  pastEvents: PrehistoricEvent[];
  upcomingEvents: PrehistoricEvent[];

  // Allow any additional properties
  [key: string]: any;
}

Alpine.data(
  "app",
  (): AppData => ({
    timeCalculator: new TimeCalculator(),
    earthYear: 0,
    earthYearDisplay: "",
    units: Units.YEARS,
    earthAge: TimeCalculator.EARTH_AGE,
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
    pastEvents: [],
    upcomingEvents: [],

    init() {
      // Calculate how many years to increment every cycle:
      const earthYearsPerSecond =
        this.earthAge / DateTime.now().daysInYear / 24 / 60 / 60;
      const ticksPerSecond = 1000 / this.tickPeriod;
      this.earthYearsPerTick = earthYearsPerSecond / ticksPerSecond;

      console.log({earthYearsPerSecond});

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
      if (this.tickCount++ % 10 != 0) {
        // Instead of going for the full hassle of recalculating everything, just
        // decrement the known number of earth years most ticks
        // This is an optimisation
        this.earthYear = Math.max(0, this.earthYear - this.earthYearsPerTick);
        this.renderYear();
        return;
      }

      // Short hand for time calculator
      const tc = this.timeCalculator;

      tc.update(this.offsetDays);
      this.currentTime = tc.getCurrentTimeString();
      this.earthYear = tc.currentTimeToEarthYear();

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
      this.startLocal = tc.earthYearToLocalTimeString(era.startYear);
      this.endLocal = tc.earthYearToLocalTimeString(era.endYear);

      // Check how far through the current era we are
      this.currentEraPercentage =
        (100 * (era.startYear - this.earthYear)) /
        (era.startYear - era.endYear);

      // const mapEvents = (e: PrehistoricEvent) => ({
      //   ...e,
      //   localDate: tc.earthYearToLocalTimeString(e.year),
      // });
      // // Get past events
      // const pastEvents: PrehistoricEvent[] = [];
      // from(events)
      //   .pipe(
      //     filter((e) => e.year >= this.earthYear),
      //     takeLast(2),
      //     map(mapEvents),
      //   )
      //   .forEach((e) => {
      //     pastEvents.push(e);
      //   });
      // this.pastEvents = pastEvents;

      // // Get upcoming events
      // const upcomingEvents: PrehistoricEvent[] = [];
      // from(events)
      //   .pipe(
      //     filter((e) => e.year < this.earthYear),
      //     take(3),
      //     map(mapEvents),
      //   )
      //   .forEach((e) => {
      //     upcomingEvents.push(e);
      //   });
      // this.upcomingEvents = upcomingEvents;

      // Events today
      this.upcomingEvents = events.filter((e) => {
        // Filter if it is today
        const date = tc.earthYearToLocalTime(e.year);
        return date.ordinal == tc.now.ordinal;
      }).map((e => {
        const date = tc.earthYearToLocalTime(e.year);
        return {
          ...e,
          localTime: date.toLocaleString(DateTime.TIME_WITH_SECONDS),
          isPast: date < tc.now
        };
      }));

      this.renderYear();
    },
  }),
);

Alpine.start();
