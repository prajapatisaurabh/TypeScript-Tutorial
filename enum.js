"use strict";
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["MONDAY"] = 1222] = "MONDAY";
    DaysOfTheWeek[DaysOfTheWeek["TUESDAY"] = 1223] = "TUESDAY";
    DaysOfTheWeek[DaysOfTheWeek["WEDNESDAY"] = 1224] = "WEDNESDAY";
    DaysOfTheWeek[DaysOfTheWeek["THURSDAY"] = 1225] = "THURSDAY";
    DaysOfTheWeek[DaysOfTheWeek["FRIDAY"] = 1226] = "FRIDAY";
    DaysOfTheWeek[DaysOfTheWeek["SATURDAY"] = 1227] = "SATURDAY";
    DaysOfTheWeek[DaysOfTheWeek["SUNDAY"] = 1228] = "SUNDAY";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
let day = DaysOfTheWeek.FRIDAY;
console.log(day);
if (day === DaysOfTheWeek.FRIDAY) {
    console.log("It is Friday");
}
