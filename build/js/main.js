"use strict";
// let stringArr = ['one', 'hey', 'filip']
// let guitars = ['Strat', 'Les Paul', 5150]
// let mixedData = ['EVH', 1992, true]
// Literal types
let myName;
let userName;
userName = 'Amy';
//Functions
const add = (a, b) => {
    return a + b;
};
// void means function that does not return anything/value
const logMsg = (message) => {
    console.log(message); // calls side Effect
};
logMsg('Hello');
logMsg(add(2, 9));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b:number): number
// } 
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 10));
// optional parameters
// optional parameters needs to be last in the arguments list, required first.
const addAll = (a, b, c) => {
    // called typeGuard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default parametars
const sumAll = (a, b, c = 2) => {
    // called typeGuard 
    return a + b + c;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
