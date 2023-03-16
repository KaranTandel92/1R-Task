let saveButton = document.querySelector(".saveButton");
let form = document.getElementById("form");
let cancelButton = document.querySelector(".cancelButton");
cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
})

// saveButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     let name = document.getElementById("userName");
//     let description = document.getElementById("writeDescription");
//     let selectOption = document.getElementById("dataStatus");
//     let rate = document.getElementById("writeRate");
//     let balance = document.getElementById("checkBalance");
//     let deposit = document.getElementById("userDeposite");

//     let postData = {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             name: name.value,
//             description: description.value,
//             selectOption: selectOption.value,
//             rate: rate.value,
//             balance: balance.value,
//             deposit: deposit.value
//         })
//     }
//     fetch("http://localhost:3000/dataStore", postData)
//         .then((response) => (response.json()))
//         .then(data => console.log(data))
//         .catch(error => console.log(error));
// })

let header = { id: "#", name: "NAME", description: "DESCRIPTION", selectOption: "STATUS", rate: "RATE", balance: "BALANCE", deposit: "DEPOSITE" }

let table = document.getElementById("table");
// // Create table heading
function createTableHeading(table, data) {
    let thead = document.createElement("thead");
    thead.className = "tableHead";
    table.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    for (const key in data) {
        let th = document.createElement("th");
        th.className = "tableHeadingData";
        let text = document.createTextNode(data[key]);
        th.appendChild(text);
        tr.appendChild(th);
    }
    let th = document.createElement("th");
    th.className = "tableHeading";
    let text = document.createTextNode("ACTION");
    th.appendChild(text);
    tr.appendChild(th);
}
createTableHeading(table, header);
// end : table heading

// Get data into the table from API
// async function getData() {
//     let req = await fetch('http://localhost:3000/dataStore');
//     let res = await req.json();
//     createTableBody(res);
// };

// Get data from the API
function getData() {
    fetch('http://localhost:3000/dataStore')
        .then((response) => response.json()
            .then((data) => {
                createTableBody(data);
            }))
}
// // create table body

function createTableBody(data) {

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (const element of data) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (const item in header) {
            let td = document.createElement("td");
            td.className = "tableData";

            if (item == "name") {
                td.className = "nameOfUser";
            }
            if (item == "rate") {
                if (element[item] == "$") {
                    let text = document.createTextNode("$");
                    td.className = "rateOfUser";
                    td.appendChild(text);
                }
            }
            if (item == "deposit") {
                td.className = "depositOfUser";
            }
            if (item == "description") {
                td.className = "userDescription";
            }
            if (item == "balance") {
                if (element[item] <= 0) {
                    td.className = "userCurrentBalance";
                    let text = document.createTextNode("-$");
                    td.appendChild(text);
                }
                else {
                    td.className = "userCurrentBalancePositive";
                    let text = document.createTextNode("$");
                    td.appendChild(text);
                }
            }
            if (item == "selectOption") {
                let span = document.createElement("span");
                // console.log(item);
                if (element[item] == "Error") {
                    span.className = "errorOption";
                }
                else if (element[item] == "Open") {
                    span.className = "openOption"
                }
                else if (element[item] == "Success") {
                    span.className = "successOption"
                }
                else if (element[item] == "Inactive") {
                    span.className = "inactiveOption"
                }
                let text = document.createTextNode(element[item]);
                span.appendChild(text);
                td.appendChild(span);
            }
            else {
                if (item == "balance") {
                    if (element[item] <= 0) {
                        let text = document.createTextNode((element[item]) * (-1));
                        td.appendChild(text);
                    }
                    else {
                        let text = document.createTextNode((element[item]));
                        td.appendChild(text);
                    }
                }
                else {
                    let text = document.createTextNode(element[item]);
                    td.appendChild(text);
                }
            }

            tr.appendChild(td);
        }
        let td = document.createElement("td");
        tr.appendChild(td);
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        let deleteText = document.createTextNode("Delete");
        deleteButton.addEventListener("click", e => {
            e.preventDefault();
            fetch(`http://localhost:3000/dataStore/${element["id"]}`, { method: "DELETE" })
            table.deleteRow(tr.rowIndex);
        })
        deleteButton.appendChild(deleteText);
        td.appendChild(deleteButton);
        let editButton = document.createElement("button");
        editButton.className = "edit-button";
        let editText = document.createTextNode("Edit");
        editButton.addEventListener("click", e => {
            e.preventDefault();
            rowEdit(element)
        })
        editButton.appendChild(editText);
        td.appendChild(editButton);
    }
}
// end : table body


let updateButton = document.querySelector(".updateButton");

function rowEdit(element) {
    let name = document.getElementById("userName");
    let description = document.getElementById("writeDescription");
    let selectOption = document.getElementById("dataStatus");
    let rate = document.getElementById("writeRate");
    let balance = document.getElementById("checkBalance");
    let deposit = document.getElementById("userDeposite");
    name.value = element.name;
    description.value = element.description;
    selectOption.value = element.selectOption;
    rate.value = element.rate;
    balance.value = element.balance;
    deposit.value = element.deposit;

    updateButton.addEventListener("click", e => {
        e.preventDefault();
        let editData = {
            name: name.value,
            description: description.value,
            selectOption: selectOption.value,
            rate: rate.value,
            balance: balance.value,
            deposit: deposit.value
        }
        // data edit
        fetch(`http://localhost:3000/dataStore/${element.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editData),
        })
            .then((response) => (response.json()))
        // .then(data => console.log(data));
    })
}
// start : validation

function userNameValidation() {
    if (userName.value.length < 3 || userName.value.length >= 25) {
        userName.style.border = "2px solid red"
        document.getElementById("userError").innerHTML = "Length should be 3 to 25"
        document.getElementById("userError").classList.add("color-red");
    }
    else if (!userName.value.match(/^[a-zA-Z]*$/)) {
        userName.style.border = "2px solid red"
        document.getElementById("userError").innerHTML = "Enter valid name"
        document.getElementById("userError").classList.add("color-red");
    }
    else if (userName.value == "") {
        userName.style.border = "2px solid red"
        document.getElementById("userError").innerHTML = "Name is require"
        document.getElementById("userError").classList.add("color-red");
    }
    else {
        userName.style.border = "2px solid green";
        document.getElementById("userError").innerHTML = ""
        return true;
    }
}
userName.addEventListener("keyup", (e) => {
    e.preventDefault()
    userNameValidation();
})

function descriptionValidation() {
    if (writeDescription.value == "") {
        writeDescription.style.border = "2px solid red"
        document.getElementById("descriptionError").innerHTML = "Length should be min 3 and max 150 characters"
        document.getElementById("descriptionError").classList.add("color-red");
    }
    else if (!writeDescription.value.match(/[^a-zA-Z\s]*/)) {
        writeDescription.style.border = "2px solid red";
        document.getElementById("descriptionError").innerHTML = "enter valid description"
    }
    else {
        writeDescription.style.border = "2px solid green";
        document.getElementById("userError").innerHTML = ""
        return true;
    }
}
writeDescription.addEventListener("keyup", () => {
    descriptionValidation();
})

function optionValidation() {
    if (dataStatus.value == "") {
        dataStatus.style.border = "2px solid red"
        document.getElementById("optionError").innerHTML = "Select your status"
        document.getElementById("optionError").classList.add("color-red");
    }
    else {
        dataStatus.style.border = "2px solid green";
        document.getElementById("optionError").innerHTML = ""
        return true;
    }
}
dataStatus.addEventListener("change", () => {
    optionValidation();
})

function rateValidation() {
    if (writeRate.value == "") {
        writeRate.style.border = "2px solid red"
        document.getElementById("rateError").innerHTML = "This Field is Required"
        document.getElementById("rateError").classList.add("color-red");
    }
    else if (!writeRate.value.trim().match(/^[0-9]*$/)) {
        document.getElementById("rateError").innerHTML = "Enter valid amount"
        document.getElementById("rateError").classList.add("color-red");
    }
    else {
        writeRate.style.border = "2px solid green";
        document.getElementById("rateError").innerHTML = ""

        return true;
    }
}
writeRate.addEventListener("keyup", () => {
    rateValidation();
})

function balanceValidation() {

    if (checkBalance.value == "") {
        checkBalance.style.border = "2px solid red"
        document.getElementById("balanceError").innerHTML = "This Field is Required"
        document.getElementById("balanceError").classList.add("color-red");
    }
    else if (!checkBalance.value.trim().match(/^[-0-9]*$/)) {
        document.getElementById("balanceError").innerHTML = "Enter valid amount"
        document.getElementById("balanceError").classList.add("color-red");
    }
    else {
        checkBalance.style.border = "2px solid green";
        document.getElementById("balanceError").innerHTML = "";
        return true;
    }
}
checkBalance.addEventListener("keyup", () => {
    balanceValidation();
})

function depositeValidation() {
    if (userDeposite.value == "") {
        userDeposite.style.border = "2px solid red"
        document.getElementById("depositError").innerHTML = "This Field is Required"
        document.getElementById("depositError").classList.add("color-red");
    }
    else if (!userDeposite.value.trim().match(/^[0-9]*$/)) {
        document.getElementById("depositError").innerHTML = "Enter valid amount"
        document.getElementById("depositError").classList.add("color-red");
    }
    else {
        userDeposite.style.border = "2px solid green";
        document.getElementById("depositError").innerHTML = "";
        return true;
    }
}

userDeposite.addEventListener("keyup", () => {
    depositeValidation();
})
saveButton.addEventListener("click", (e) => {
    // debugger
    e.preventDefault();
    let name = document.getElementById("userName");
    let description = document.getElementById("writeDescription");
    let selectOption = document.getElementById("dataStatus");
    let rate = document.getElementById("writeRate");
    let balance = document.getElementById("checkBalance");
    let deposit = document.getElementById("userDeposite");

    if (depositeValidation() && balanceValidation() && rateValidation() && optionValidation() && descriptionValidation() && userNameValidation()) {

        fetch("http://localhost:3000/dataStore", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name.value,
                description: description.value,
                selectOption: selectOption.value,
                rate: rate.value,
                balance: balance.value,
                deposit: deposit.value
            })
        }).then((response) => response.json()).then(data => console.log(data));
    } else {
        alert("Submit valid data")
    }
});

window.addEventListener("load", (e) => {
    getData()
});





