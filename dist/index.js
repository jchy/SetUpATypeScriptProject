// let x = 10;
// console.log(x);
// async function sleep(){
//     setTimeout(() => {
//         console.log("success");
//     })
// }
// sleep();
// export default sleep;
// console.log([1]/4);
// Boolean 
let x;
x = true;
x = false;
let y;
y = 100;
y = 20;
//string
let firstname;
firstname = `${y}`;
// Arrays
let list = [1, 2, 3, "0"];
let stringList;
let arr;
// arr.push(10);
console.log(arr);
// Array using angle brackets 
let boolList = [1, 2, 3];
console.log(boolList);
// Tuple 
let tuple;
tuple = ["hello", 1234];
console.log(tuple);
tuple[0].substring(1);
// fised length, as type
// enum 
// red, green, blue
// 0,    1,     2
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
console.log(Color);
// null
let u = undefined;
let n = null;
// void 
// function return statement can be given a particular response 
function sum(a, b) {
    console.log(a + b);
}
sum(5, 7);
// Any
// Any : it is not recommended to use since we loose the objective of using typescript
let value;
value = 5;
let obj;
obj = { label: "ADD", color: "red", size: 32 };
let obj2;
obj2 = { label: "ADD" };
// Different ways of declaring a function 
// 1~ General function decalaration
function add(x, y) {
    console.log(x + y);
}
// 2~ Anonymous function decalaration
let addFn = function (x, y) {
    return x + y;
};
//  3~ Arrow function decalaration
let addAFn = (f, g) => {
    console.log(f + g);
};
// Object function
function printName({ firstname, lastname }) {
    return firstname + " " + lastname;
}
function displayName({ firstName, lastName }) {
    if (lastName)
        return firstName + " " + lastName;
    return firstName;
}
console.log(displayName({ firstName: "Jaswant" }));
// Union Type
let userType;
// userType = "amit"; <-- this line will give you an error stating that is can only be of type "super-admin"|admin"|"user"
let input;
let response = {
    status: true,
    cityName: {
        title: "Siddharthnagar"
    }
};
console.log(response);
//# sourceMappingURL=index.js.map