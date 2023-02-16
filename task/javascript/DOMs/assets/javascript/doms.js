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