enum DaysOfTheWeek {
  MONDAY = 1222,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

let day = DaysOfTheWeek.FRIDAY;
console.log(day);

if (day === DaysOfTheWeek.FRIDAY) {
  console.log("It is Friday");
}
