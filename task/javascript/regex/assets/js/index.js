function mainData() {

    //first name
    let firstName = document.getElementById("firstName");

    firstName.addEventListener("keyup", () => {
        if (firstName.value.trim().match(/[0-9]/)) {
            firstName.style.border = "2px solid red"
            document.getElementById("userError").innerHTML = "Enter valid name"
            document.getElementById("userError").classList.add("color-red");
        }
        else if (firstName.value == "") {
            firstName.style.border = "2px solid red"
            document.getElementById("userError").innerHTML = "Name is require"
            document.getElementById("userError").classList.add("color-red");
        }
        else {
            firstName.style.border = "2px solid green";
            document.getElementById("userError").innerHTML = ""
        }
    })
    // end first name

    //last name
    let lastName = document.getElementById("lastName");

    lastName.addEventListener("keyup", () => {
        if (lastName.value.trim().match(/[0-9]/)) {
            lastName.style.border = "2px solid red"
            document.getElementById("lastNameError").innerHTML = "Enter valid name"
            document.getElementById("lastNameError").classList.add("color-red");
        }
        else if (lastName.value == "") {
            lastName.style.border = "2px solid red"
            document.getElementById("lastNameError").innerHTML = "Name is require"
            document.getElementById("lastNameError").classList.add("color-red");
        }
        else {
            lastName.style.border = "2px solid green";
            document.getElementById("lastNameError").innerHTML = ""
        }
    })
    //     //end last name

    //     //phone number
    let phone = document.getElementById("phoneNumber");

    phone.addEventListener("keyup", () => {
        if (/^[89][0-9]{9}$/.test(phone.value)) {
            phone.style.border = "2px solid green";
            // console.log(phone.value);
            document.getElementById("mobileNumber").innerHTML = "";
        }
        else if (phone.value.trim().match(/[^8-9]/)) {
            phone.style.border = "2px solid red";
            document.getElementById("mobileNumber").innerHTML = "* Enter valid number";
            document.getElementById("mobileNumber").classList.add("color-red");
        }
        else if (phone.value.match(/^[^0-9]/)) {
            phone.style.border = "2px solid red"
            document.getElementById("mobileNumber").innerHTML = "Number only"
            document.getElementById("mobileNumber").classList.add("color-red");
        }
        else if (phone.value == "") {
            phone.style.border = "2px solid red"
            document.getElementById("mobileNumber").innerHTML = "Mobile number should be compulsory"
            document.getElementById("mobileNumber").classList.add("color-red");
        }
        else {
            return true;
        }
    })
    //end phone number

    //eamil address
    //for personal
    let email = document.getElementById("email");

    email.addEventListener("keyup", () => {
        if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/.test(email.value)) {
            email.style.border = "2px solid green";
            document.getElementById("emailAddress").innerHTML = ""
            // console.log(email.value);
        }
        else if (email.value == "") {
            email.style.border = "2px solid red"
            document.getElementById("emailAddress").innerHTML = "Email id is require"
            document.getElementById("emailAddress").classList.add("color-red");
        }
        else {
            return true;
        }
    })

    //for organization
    let anotherEmail = document.getElementById("anotherEmail");

    anotherEmail.addEventListener("keyup", () => {
        if (/^[A-Za-z0-9._%+-]+@1Rivet.com$/.test(anotherEmail.value)) {
            anotherEmail.style.border = "2px solid green";
            // console.log(anotherEmail.value);
            document.getElementById("anotherEmailAddress").innerHTML = ""
        }
        else if (anotherEmail.value == "") {
            anotherEmail.style.border = "2px solid red"
            document.getElementById("anotherEmailAddress").innerHTML = "Email id is require"
            document.getElementById("anotherEmailAddress").classList.add("color-red");
        }
        else if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/.test(anotherEmail.value)) {
            anotherEmail.style.border = "2px solid red"
            document.getElementById("anotherEmailAddress").innerHTML = "Enter valid mail id"
            document.getElementById("anotherEmailAddress").classList.add("color-red");
        }
        else {
            return true;
        }
    })
    //     //end email address


    //     //passwaord
    let password = document.getElementById("password");

    password.addEventListener("keyup", () => {
        // let reg = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let reg = /[0-9]/;
        if (reg.test(password.value)) {
            // console.log(password.value);
            // document.getElementById("userPassword").innerHTML = "Enter valid password"
            // document.getElementById("userPassword").classList.add("color-red");
            password.style.border = "2px solid green";
            document.getElementById("userPassword").innerHTML = "";
        }
        else if (password.value == "") {
            password.style.border = "2px solid red"
            document.getElementById("userPassword").innerHTML = "Please enter your password"
            document.getElementById("userPassword").classList.add("color-red");
        }
        else {
            password.style.border = "2px solid red";
        }
    })
    //end password

    //     //salary
    let salary = document.getElementById("salary");

    salary.addEventListener("keyup", () => {
        if (salary.value >= 5000) {
            console.log(salary.value);
            salary.style.border = "2px solid green";
            document.getElementById("userSalary").innerHTML = "";
        }
        else if (salary.value < 5000) {
            salary.style.border = "2px solid red"
            document.getElementById("userSalary").innerHTML = "Enter valid amount"
            document.getElementById("userSalary").classList.add("color-red");
        }
        else {
            salary.style.border = "2px solid green";
        }
    })
    //     //end : salary

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let phone = document.getElementById("phoneNumber").value;
        let email = document.getElementById("email").value;
        let anotherEmail = document.getElementById("anotherEmail").value;
        let password = document.getElementById("password").value;
        let salary = document.getElementById("salary").value;
        if (firstName == "" || lastName == "" || phone == "" || email == "" || anotherEmail == "" || password == "" || salary == "") {
            alert("error")
        }

        else if (userError.innerHTML == "" && lastNameError.innerHTML == "" &&
            mobileNumber.innerHTML == "" && emailAddress.innerHTML == "" &&
            anotherEmailAddress.innerHTML == "" && userPassword.innerHTML == "" &&
            userSalary.innerHTML == "") {

            let firstName = document.getElementById("firstName");
            let lastName = document.getElementById("lastName");
            let phone = document.getElementById("phoneNumber");
            let email = document.getElementById("email");
            let anotherEmail = document.getElementById("anotherEmail");
            let password = document.getElementById("password");
            let salary = document.getElementById("salary");
            fetch(" http://localhost:3000/newRegex", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: firstName.value,
                    lastName: lastName.value,
                    phone: phone.value,
                    email: email.value,
                    anotherEmail: anotherEmail.value,
                    password: password.value,
                    salary: salary.value
                })
            }).then((response) => response.json()).then(data => console.log(data));
            // Go to next page
            let submit = document.getElementById("submit");

            // Store data
            window.location.href = "link.html"
        }
    })

}
mainData();

