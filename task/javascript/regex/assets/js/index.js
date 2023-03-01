
// let submit = document.getElementById("submit");

//first name
let firstName = document.getElementById("firstName");

firstName.addEventListener("keyup", () => {
    if (firstName.value.trim().match(/[0-9]/)) {
        firstName.style.border = "2px solid red"
        document.getElementById("user-error").innerHTML = "Enter valid name"
        document.getElementById("user-error").classList.add("color-red");
    }
    else if (firstName.value == "") {
        firstName.style.border = "2px solid red"
        document.getElementById("user-error").innerHTML = "Name is require"
        document.getElementById("user-error").classList.add("color-red");
    }
    else {
        firstName.style.border = "2px solid green";
    }
})
// end first name

//last name
let lastName = document.getElementById("lastName");

lastName.addEventListener("keyup", () => {
    if (/[A-Z]{1}[a-z]{2,12}/.test(lastName.value.trim())) {
        console.log(lastName.value.trim());
    }
    else if (lastName.value.trim().match(/[0-9]/)) {
        lastName.style.border = "2px solid red";
        document.getElementById("last-name-error").innerHTML = "* Enter valid last name";
        document.getElementById("last-name-error").classList.add("color-red");
    }
    else if (lastName.value == "") {
        lastName.style.border = "2px solid red"
        document.getElementById("last-name-error").innerHTML = "Last name is require"
        document.getElementById("last-name-error").classList.add("color-red");
    }
    else {
        lastName.style.border = "2px solid green";
    }
})
//     //end last name

//     //phone number
let phone = document.getElementById("phoneNumber");

phone.addEventListener("keyup", () => {
    if (/[89][0-9]{9}/.test(phone.value)) {
        console.log(phone.value);
    }
    else if (phone.value.trim().match(/[^8-9]/)) {
        phone.style.border = "2px solid red";
        document.getElementById("mobile-number").innerHTML = "* Enter valid number";
        document.getElementById("mobile-number").classList.add("color-red");
    }
    else if (phone.value.match(/^[^0-9]/)) {
        phone.style.border = "2px solid red"
        document.getElementById("mobile-number").innerHTML = "Number only"
        document.getElementById("mobile-number").classList.add("color-red");
    }
    else if (phone.value == "") {
        phone.style.border = "2px solid red"
        document.getElementById("mobile-number").innerHTML = "Mobile number should be compulsory"
        document.getElementById("mobile-number").classList.add("color-red");
    }
    else {
        phone.style.border = "2px solid green";
    }
})
//end phone number

//eamil address
//for personal
let email = document.getElementById("email");

email.addEventListener("keyup", () => {
    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/.test(email.value)) {
        console.log(email.value);
    }
    else if (email.value == "") {
        email.style.border = "2px solid red"
        document.getElementById("email-address").innerHTML = "Email id is require"
        document.getElementById("email-address").classList.add("color-red");
    }
    else {
        email.style.border = "2px solid green";
    }
})

//for organization
let anotherEmail = document.getElementById("anotherEmail");

anotherEmail.addEventListener("keyup", () => {
    if (/^[A-Za-z0-9._%+-]+@1Rivet.com$/.test(anotherEmail.value)) {
        console.log(anotherEmail.value);
    }
    else if (anotherEmail.value == "") {
        anotherEmail.style.border = "2px solid red"
        document.getElementById("another-email-address").innerHTML = "Email id is require"
        document.getElementById("another-email-address").classList.add("color-red");
    }
    else {
        anotherEmail.style.border = "2px solid green";
    }
})

//     //end email address


//     //passwaord
// let password = document.getElementById("password");

// let reg = /[a-zA-Z0-9!@#$%^&*]{6,16}/;
// if (reg.test(password.value)) {
//     console.log(password.value);
// }
// else {
//     password.style.border = "2px solid red"

// }
//     //end password

//     //salary
let salary = document.getElementById("salary");

salary.addEventListener("keyup", () => {
    if (salary.value >= 5000) {
        console.log(salary.value);
        salary.style.border = "2px solid green";
        document.getElementById("user-salary").innerHTML = "Email id is require"
        document.getElementById("user-salary").classList.add("color-red");
    }
    else {
        salary.style.border = "2px solid red"
    }
})
//     //end : salary

