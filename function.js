"use strict";
function add(a, b) {
    return a + b;
}
var sum = add(1, 4);
console.log("Sum: " + sum);
function sumthis(a, b, c = 1) {
    return a + b + c;
}
console.log(sumthis(1, 2));
console.log(sumthis(1, 2, 3));
