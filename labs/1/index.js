const Adder = require("./Adder.js");

let adder = new Adder(
    {
        a: 10,
        b: 15
    }
);

console.log(adder.render());