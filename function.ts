function add(a: number, b: number) {
  return a + b;
}

var sum = add(1, 4);
console.log("Sum: " + sum);

function sumthis(a: number, b: number, c: number = 1): number {
  return a + b + c;
}
console.log(sumthis(1, 2));
console.log(sumthis(1, 2, 3));
