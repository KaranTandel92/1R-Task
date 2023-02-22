// set time out 
let a = setTimeout(() => {
    console.log("i will print after 5 sec");
}, 5000)


//set interval
let b = setInterval(() => {
    console.log("i will continue print in every 4 sec");
}, 2000);


//clear data of a
clearTimeout(a);


//clear data of b
btn.addEventListener("click", function () {
    clearInterval(b);
})

let sum = (a, b) => {
    console.log("sum of a and b =", (a + b + 10));
}

setTimeout(sum, 3000, 5, 3);


setTimeout(() => {
    console.log("you go i will come after 3 second");
}, 3000);

setInterval(() => {
    console.log("i will come in every 4 second");
}, 4000);