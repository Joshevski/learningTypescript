// let stringArr = ['one', 'hey', 'filip']
// let guitars = ['Strat', 'Les Paul', 5150]
// let mixedData = ['EVH', 1992, true]

// let bands: string[] = []
// let years: number[] = []
// let discrete: boolean[] = []


// interface Guitarist {
//     name?: string,
//     active? : boolean,
//     age: number
// }


// let Filip: Guitarist = {
//     name: 'Filip',
//     age: 24
// }
// let Galja:Guitarist = {
//     name: 'Galina',
//     active: true,
//     age: 22
// }
// console.log(Filip)
// console.log(Galja)

// const greetGuitarist = (guitarist: Guitarist) => {
//     if(guitarist.name) {
//         return `Hello ${guitarist?.name}!`
//     }
//         return `Hello`
// }

// console.log(greetGuitarist(Galja))

// you can use interface instead of type


// ENUMS


// enum Grade {
//     U,
//     D,
//     C,
//     B,
//     A
// }

// Type aliases

type stringOrNubmer = string | number

type stringOrNumberArray = (string | number)[]

//using type alias into type alias
type Footbaler = {
    shirtNumber: number,
    age: number,
    form : boolean | string,
    name : stringOrNumberArray
}

type UserId = stringOrNubmer

// Literal types

let myName: 'Filip'
let userName : 'Dave' | 'John ' | 'Amy'
userName = 'Amy'


//Functions



const add = (a: number , b: number) : number => {
    return a + b
} 

// void means function that does not return anything/value
const logMsg = (message : any) :void  => {
    console.log(message) // calls side Effect
}
 
logMsg('Hello')
logMsg(add(2, 9))



let subtract = function(c: number, d: number) : number {
    return c - d
}

type mathFunction = (a: number, b:number) => number
// interface mathFunction {
//     (a: number, b:number): number
// } 


let multiply: mathFunction = function(c, d) {
    return c * d
}

logMsg(multiply(2,10))



// optional parameters
// optional parameters needs to be last in the arguments list, required first.
const addAll = (a: number, b: number , c?: number) : number => {
        // called typeGuard
    if(typeof c !== 'undefined')  {
        return a + b + c
    }
        return  a + b
     
}
// default parametars
const sumAll = (a: number, b: number , c: number = 2) : number => {
    // called typeGuard 
    return  a + b + c
 
}

logMsg(addAll(2, 3, 4))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))