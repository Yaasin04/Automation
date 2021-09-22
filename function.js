const { set } = require("lodash");

function sum(a, b) {
    return a+b;
}

console.log(sum(10, 10)); //20

function product(a, b){
    return a*b;
}

console.log(product(12, 12)); 

const bigProduct = product(234, 345);
console.log(bigProduct);

setTimeout(function () {
    console.log("hey you rocks !");
    console.log("hey !");
}, 1000);

