import * as _ from 'lodash'
console.log(_.chunk([1, 2, 3, 4, 5], 2))
// console.log(_.chunk([]))
const NUM = 188
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    console.log(person.firstName)
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
greeter(user);

// document.body.innerHTML = greeter(user);