"use strict";
//string
let lname;
lname = "István";
let newname = lname.toLocaleUpperCase();
console.log(newname);
//number
let age;
age = 10;
age = 101.1;
let result = parseInt("288");
//boolean
let isvalid = false;
console.log(isvalid);
//array
let lista;
lista = ['afsads', 'asdfa', 'dsfaf'];
let depList;
depList = [1, 5, 4, 9];
let result2 = depList.filter((x) => x > 2);
console.log(result2);
let result3 = depList.find((x) => x == 4);
console.log(result3);
let sum = depList.reduce((x, y) => x + y);
console.log(sum);
