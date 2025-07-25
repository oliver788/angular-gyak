"use strict";
// 3 mod a függvényre
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add(40, 69));
const sub = (a, b, c = 10) => a - b - c;
console.log(sub(80, 38));
console.log(sub(80, 38, 90));
const mult = function (a, b) {
    return a * b;
};
function add2(a, b, ...num3) {
    return a + b + num3.reduce((a, b) => a + b, 0);
}
let numbers = [89, 60, 1000];
console.log(add2(2, 3, ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatresult = getItems([1, 2, 3, 4, 8]);
console.log(concatresult);
let strings = getItems(["asda", "adad", "ada"]);
console.log(strings);
