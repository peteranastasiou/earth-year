import { DateTime, Duration, Interval } from "luxon";

const DATE_FORMAT = DateTime.DATETIME_SHORT_WITH_SECONDS;

export class TimeCalculator {
  public static EARTH_AGE: number = 4.543 * 1000_000_000;

  private now: DateTime;
  private endOfYearDate: DateTime;

  constructor() {
    this.now = DateTime.now();
    this.endOfYearDate = this.now.endOf("year");
  }

  public update(offsetDays: number) {
    // Update the current time
    this.now = DateTime.now().plus(Duration.fromObject({ days: offsetDays }));

    // This is the instant before midnight at the end of the current year
    this.endOfYearDate = this.now.endOf("year");
  }

  public getCurrentTimeString(): string {
    return this.now.toLocaleString(DATE_FORMAT);
  }

  public currentTimeToEarthYear() {
    // Days left in the year
    const daysLeft: number = Interval.fromDateTimes(
      this.now,
      this.endOfYearDate,
    ).length("days");

    // Portion of year left
    const portionLeft = daysLeft / this.now.daysInYear;
    return TimeCalculator.EARTH_AGE * portionLeft;
  }

  public earthYearToLocalTime(earthYear: number) {
    const daysRemaining =
      (earthYear * this.now.daysInYear) / TimeCalculator.EARTH_AGE;
    const msRemaining = daysRemaining * 86400000;
    const date = this.endOfYearDate.minus(Duration.fromMillis(msRemaining));
    return date.toLocaleString(DATE_FORMAT);
  }
}
