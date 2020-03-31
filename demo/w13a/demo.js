//alt shift down allows to duplicate
//use node in terminal to access js in terminal
var a = 100;
var b = a;
console.log(a);
{
    let a = 100
    //outside of this block a is not defined
    //if statements and functons are also blocks
}

let a = 100;
console.log(a)
a = 200
console.log(a)
//a comes out different both times because let allows us to change it

const b = 200 + 100
//operator (yake left and right side and add it togetter)
//if you take two strings, 
//then it cincatonates the two strings
//when you add a number in a string, it converts the
//number into a string and then adds it together

console.log(200 == "200")
//boolean
//comparison operators ==, <, >
// === same type and same value (strict equality)

//function outside of a class
function a1(input){
    input = this.hello
    console.log(`A has been executed: ${input}`)
    console.log(this)
}

a1(a)
//placing a into te function

//this
console.log(this)


//object literal
let obj = {
    hello: "Hello",
    aFunc: () => a1(this.hello)
    //take value stored in a1 and execute it
}

obj.aFunc()

//global scope
//arrow function

let arrow = (globalA) => {
    let a = 10
    console.log("Arrow function executed" + a)
    console.log("Arrow function executed, global a:" + globalA)
}

arrow(a)
const helloWorld = "Hello World"
const helloWorld2 = `Hello World ${a}` //grave function
console.log(helloWorld)
console.log(helloWorld2)

//callback function
setTimeout(() => {console.log("Finished")}, 2000)
console.log("After setting the timeout!")

//review lecture for the rest of this part

function afterSeconds(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Executed after ${seconds}`)
            resolve(seconds)
        }, seconds*1000)
    })
}
afterSeconds(2)
    .then((retValue) => {
        console.log("Resolved!" + retValue)
        return afterSeconds(2)
    })
    .then((retValue) => {
        console.log("Resolved!" + retValue)
        return afterSeconds(2)
    })
console.log("After setting the timeout!")

//async / await
//cant use await without doing async first

//await means take promise on the right of await and...
async function doAsync() {
    console.log("Starting...")
    let retValue = await afterSeconds(2)
    console.log(`${retValue} seconds have passed`)
    retValue = await afterSeconds(2)

    retValue = await afterSeconds(2)
    console.log("Finished")
}
//await is important for fetch


//npx for react app
// use client for lab5
// npm install --global expo-cli
// this is for react native
//expo init

//open apis
//there is one on github https://github.com/public-apis/public-apis
//google provides apis but you pay per second
//project gutenburg api
//twitter api if you wanna process tweets in realtime

//fetch returns a promise
//topology
//componentDidMoount()
//cant use p tags in react native





