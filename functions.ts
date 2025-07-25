// 3 mod a függvényre

function add(a: number, b: number, c?: number): number {
    return c? a + b +c : a+b
}
console.log(add(40, 69))
const sub = (a: number, b: number, c = 10): number => a - b -c
console.log(sub(80, 38))
console.log(sub(80, 38, 90))
const mult = function (a: number, b: number): number {
    return a * b
}


function add2(a: number, b: number, ...num3: number[]): number {
return a + b + num3.reduce((a,b) => a+b, 0 )
}
let numbers = [89, 60, 1000]
console.log(add2(2, 3, ...numbers));










function getItems<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items);
}

let concatresult = getItems([1, 2, 3, 4, 8])

console.log(concatresult)
let strings = getItems(["asda", "adad", "ada"])
console.log(strings)