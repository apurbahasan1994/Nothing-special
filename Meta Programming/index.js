// symbols , iterators , generators , reflect api, proxy api

// symbols
// are primitive values
// used as object property identifier---> keys
// built in symbols and creatable symbols
// uniqueness is guaranteed

const uuid = Symbol('uuid');

const Person = {
    [uuid]: 'p1',
    name: 'Max',
    age: 30
};

// console.log(Person);

// well known symbols
// go to mdn

// iterator is an object that has next method inside of it

const company = {
    currentEmployee: 0,
    employees: ['Max', "Anna", "Manu"],
    next() {
        if (this.currentEmployee >= this.employees.length) {
            return { value: this.currentEmployee, done: true }
        }
        const returnValue= { value: this.employees[this.currentEmployee], done: false };
        this.currentEmployee++;
        return returnValue;
    }
}


// generators
// a generator is something that build us an iterator object


// const company2 = {
//     currentEmployee: 0,
//     employees: ['Max', "Anna", "Manu"],
//     next() {
//         if (this.currentEmployee >= this.employees.length) {
//             return { value: this.currentEmployee, done: true }
//         }
//         const returnValue= { value: this.employees[this.currentEmployee], done: false };
//         this.currentEmployee++;
//         return returnValue;
//     },
//     [Symbol.iterator]:function* emloyeeGenerator(){
//         let employee=this.next();
//         while(!employee.done){
         
//             yield employee.value; 
//             employee=this.next();
//         }

//     }
// }
const company3 = {
    employees: ['Max', "Anna", "Manu"],
    [Symbol.iterator]:function*  (){
        let currentEmployee=0;
        while(this.employees.length>currentEmployee){
            yield this.employees[currentEmployee];
            currentEmployee++;
        }

    }
}


for(let o of company3){
    console.log(o)
}

// the proxy api
// The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.
const course={
    name:'Apurba',
    email:"apurbahasan@gmail.com"
}
const courseHandler={
    get(obj,property){
        console.log(property);
    }
}
const pCourse=new Proxy(course,courseHandler);
console.log(pCourse);