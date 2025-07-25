//string

let lname : string;
lname = "István";
let newname = lname.toLocaleUpperCase()

console.log(newname)


//number
let age: number;
age = 10;
age = 101.1
let result = parseInt("288")

//boolean
let isvalid : boolean = false;
console.log(isvalid)

//array
let lista :string[];
lista = ['afsads', 'asdfa', 'dsfaf']


let depList : Array<number>;
depList = [1, 5, 4, 9]
let result2 = depList.filter((x)=> x > 2)
console.log(result2)

let result3 = depList.find((x)=> x == 4)
console.log(result3)




let sum = depList.reduce((x, y) => x+y)
console.log(sum)


//enum
const enum Color{
    Red,
    Gren,
    Blue
}
let c: Color = Color.Blue;

//tuples
let swapnummber: [number, number]
function swapper(x:number, y:number) : [number, number]{
    return[y,x]
}
swapnummber = swapper(10, 20)
swapnummber[0];
swapnummber[1]

//any
let department: any;
department = "IT"
department = 69


