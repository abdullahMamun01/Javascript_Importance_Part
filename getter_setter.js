
// get – a function without arguments, that works when a property is read,
// set – a function with one argument, that is called when the property is set,

//The getter work when object property is read
let obj = {
    dataVal: 44,
    get accesVal() {
        return this.dataVal;
    },
    set accesVal(val) {
        this.dataVal = val
    }
}
obj.accesVal = 330
console.log(obj.accesVal)


//example 2
let person = {
    firstName: "",
    lastName: "",
    set fullName(name) {
        if (typeof name !== 'string') {
            throw new Error("Name must be string letter")
        }
        let parts = name.split(' ');
        console.log(parts.length)
        if (parts.lemgth < 2) {
            throw new Error('Full name must have a first and last name');
        }

        this.firstName = parts[0]
        this.lastName = parts[1]

    },

    get fullName() {
        return this.firstName + " " + this.lastName
    }
}


//we do not need call as function for set the property value . we can assign like as a variable value . the assign value take as a function perameter
person.fullName = 'abdullah mamun'

//we do not need call person.fullName as s function . we read it normally
person.fullName // abdullah mamun




let q = Object.create(person)
//inherited accesor properties work
q.fullName = "rakib tushar"
console.log(q.fullName)

let serialNo = {
    n: 1,
    get next_n() { return this.n++ }
}


serialNo.next_n;
serialNo.next_n;
serialNo.next_n; // 3


let user = {
    name: "John",
    surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

//we can just call fullname property it will be work set and get both method 
user.fullName = "John doe"

console.log(user.fullName) // jhon doe

/* 
This will invoke the getter function and log the current full name of the user object, 
based on the current values of the name and surname properties
*/