class Employee {
id!: number;
name!: string;
address: string;


constructor(id: number, name: string, address: string){
this.name = name
this.id = id
this.address = address
}

getNameWithaddress(): string{
    return this.address+ " - "+ this.name
}

static money() : number {
    return 50
}

}
class Manager extends Employee{


constructor(id: number, name: string, address: string){
    super(id, name, address)
    
}
override getNameWithaddress(): string{
    return this.address + " bo$$ " + this.name
}
}
let emp = new Employee(1, "Béla", "nepszinhazutca")
emp.id = 1;
emp.name = "Béla";
emp.address = "nepszinhazutca"

console.log(emp)
console.log(emp.getNameWithaddress())


let man = new Manager(2, "foni", "Kistarcsa")
console.log(man.getNameWithaddress())
console.log(Employee.money())