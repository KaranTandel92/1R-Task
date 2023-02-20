// function clickbtn() {
//     alert("button was clicked")
// }

// let btnnew = document.getElementById("btn");

// btn.addEventListener("click", function () {
//     console.log("button was clicked");
// });

btn.addEventListener("mouseover", function () {
    console.log("mosuse over is ready");
});

btn.addEventListener("mouseout", function () {
    console.log("mouse out is completed");
});

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", function () {
    const justcolor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = justcolor;
});

first.addEventListener("mouseover", function () {
    document.body.style.color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
});

btn.addEventListener("mouseover", function onClick() {
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
})

btn.addEventListener("mouseout", function justClick() {
    btn.style.backgroundColor = "lightgray";
    btn.style.color = "black";
})

must.addEventListener("focus", function () {
    must.style.backgroundColor = "red";
})

must.addEventListener('blur', function () {
    must.style.backgroundColor = "orange ";
})

now.addEventListener("click", function () {
    alert("your text will be reset");
})

nicepic.addEventListener("error", function () {
    alert("The picture was not loaded");
})

let x = 10;
let y = 20;

function sum(a, b) {
    return a + b;
}

console.log(sum(x, y));

let a = 10;

function m() {
    let a = 100;
    console.log(a);
}

function n() {
    let a = 1000;
    console.log(a);
}

m();
n();
console.log(a);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];


// spread operator 
let arr4 = [...arr1, ...arr2, ...arr3];


// rest operator 
function check(...one) {
    return one;
}

let just = check(arr4);
console.log(just);