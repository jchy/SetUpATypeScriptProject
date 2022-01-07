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
let x : boolean;
x = true;
x = false;

let y : Number;
y = 100;
y=20;

//string

let firstname : string;
firstname = `${y}`;

// Arrays
let list = [1,2,3,"0"];
let stringList : string[];
let arr: number[];
// arr.push(10);
console.log(arr);

// Array using angle brackets 
let boolList: Array<number> = [1,2,3];
console.log(boolList);

// Tuple 
let tuple : [string, number];
tuple = ["hello", 1234]
console.log(tuple);

tuple[0].substring(1);
// fised length, as type

// enum 
// red, green, blue
// 0,    1,     2

enum Color{
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}
console.log(Color);

// null
let u: undefined = undefined;
let n: null = null;

// void 
// function return statement can be given a particular response 

function sum(a:number,b:number) : void {
    console.log(a + b);
}
sum(5,7);

// Any
// Any : it is not recommended to use since we loose the objective of using typescript
let value: any;
value = 5;

// Objects
// interface

interface ButtonProps{
    label: string;
    color: string;
    size:number;
}

let obj : ButtonProps;

obj = {label: "ADD", color:"red", size: 32};

// Optional props: we can provide optional props using "?" 
interface InputButtonProps{
    label: string;
    color?: string;
    size?:number;
}

let obj2 : InputButtonProps;
obj2 = {label: "ADD"};

// Different ways of declaring a function 
// 1~ General function decalaration
function add(x:number,y:number):void{
    console.log(x+y);
}

// 2~ Anonymous function decalaration
let addFn  = function(x:number,y:number) : number{
    return x + y;
}

//  3~ Arrow function decalaration
let addAFn = (f:number,g:number): void => {
    console.log(f+g)
}

// Object function
function printName({firstname, lastname} : {firstname:string, lastname:string}): string{
    return firstname+" "+lastname;
}

// Object function using interface
interface Person {
    firstName:string, 
    lastName?:string;
}

function displayName({firstName, lastName}: Person ): string{
    
    if(lastName) return firstName+" "+lastName;
    return firstName;
}

console.log(displayName({firstName:"Jaswant"}));

// Union Type
let userType : "super-admin"|"admin"|"user"
// userType = "amit"; <-- this line will give you an error stating that is can only be of type "super-admin"|admin"|"user"
let input : number|string|boolean|null;

// Types
// Let us take an exmplae of network requests
type RequestLoading = {
    state: "loading"
}

type RequestFailed = {
    state: "failed",
    code: number
}

type RequestSuccess = {
    state: "success",
    response: {
        title: string,
        status: boolean, 
        id: number, 
        count: number
    }
}

type NewtworkStats = RequestLoading|RequestFailed|RequestSuccess;

// Intersection Type

interface ErrorInterface{
    status: boolean;
    error?:{
        message: string;
    }
}
interface CityData{
    cityName: {title:string}
}
interface CountryData{
    details: {
        countOfCities: number,
        capital: string
    }
}
type CityResponse = ErrorInterface & CityData
type CountryResponse = ErrorInterface & CountryData

let response: CityResponse ={
    status: true,
    cityName: {
        title:"Siddharthnagar"
    }
}
console.log(response);