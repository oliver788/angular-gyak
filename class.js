"use strict";
class Employee {
    constructor(id, name, address) {
        this.name = name;
        this.id = id;
        this.address = address;
    }
    getNameWithaddress() {
        return this.address + " - " + this.name;
    }
}
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithaddress() {
        return this.address + " bo$$ " + this.name;
    }
}
let emp = new Employee(1, "Béla", "nepszinhazutca");
emp.id = 1;
emp.name = "Béla";
emp.address = "nepszinhazutca";
console.log(emp);
console.log(emp.getNameWithaddress());
let man = new Manager(2, "foni", "Kistarcsa");
console.log(man.getNameWithaddress());
