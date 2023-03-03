let saveButton = document.querySelector(".saveButton");

saveButton.addEventListener("click", (event) => {
    let name = document.getElementById("userName");
    let description = document.getElementById("writeDescription");
    let selectOption = document.getElementById("dataStatus");
    let rate = document.getElementById("writeRate");
    let balance = document.getElementById("checkBalance");
    let deposit = document.getElementById("userDeposite");

    let postData = {
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
    }
    fetch("http://localhost:3000/dataStore", postData)
        .then((response) => (response.json()))
        .then(data => console.log(data))
        .catch(error => console.log(error));
})

let header = { id: "#", name: "NAME", description: "DESCRIPTION", selectOption: "STATUS", rate: "RATE", balance: "BALANCE", deposit: "DEPOSITE", action: "ACTION" }

let table = document.getElementById("table");
// // Create table heading
function CreateTableHeading(table, data) {
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = document.createElement("tr");
    tr.className = "tableHeadingRow"
    thead.appendChild(tr);
    for (const key in data) {
        let th = document.createElement("th");
        th.className = "tableHeading"
        let text = document.createTextNode(data[key]);
        th.appendChild(text);
        tr.appendChild(th);
    }
}
CreateTableHeading(table, header);
// // end : table heading

async function checkUserHosting() {
    let req = await fetch('http://localhost:3000/dataStore');
    let res = await req.json();
    return res;
};
checkUserHosting().then(data => console.log(data));

// // create table body
function createTableBody(table) {
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    checkUserHosting().then(data => {
        for (const element of data) {
            let tr = document.createElement("tr");
            tbody.appendChild(tr);
            for (const item in header) {
                let td = document.createElement("td");
                td.className = "tableData";
                let text = document.createTextNode(element[item]);
                td.appendChild(text);
                tr.appendChild(td);
            }
            let deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            let deleteText = document.createTextNode("Delete");
            deleteButton.addEventListener("click", e => {
                fetch(`http://localhost:3000/dataStore/${element["id"]}`, { method: "DELETE" })
                table.deleteRow(tr.rowIndex);
            })
            deleteButton.appendChild(deleteText);
            tr.appendChild(deleteButton);

            let editButton = document.createElement("button");
            editButton.className = "edit-button";
            let editText = document.createTextNode("Edit");
            editButton.addEventListener("click", e => {
                rowEdit(element)
            })
            editButton.appendChild(editText);
            tr.appendChild(editButton);
        }
    });
}
createTableBody(table);
// })
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
            .then(data => console.log(data));
    })
}
// start : validation
userName.addEventListener("keyup", () => {
    if (userName.value.trim().match(/[^a-zA-Z]/)) {
        userName.style.border = "2px solid red"
        document.getElementById("userError").innerHTML = "Enter valid name"
        document.getElementById("userError").classList.add("color-red");
    }
    else if (userName.value == "") {
        userName.style.border = "2px solid red"
        document.getElementById("userError").innerHTML = "Name is require"
        document.getElementById("userError").classList.add("color-red");
    }
    else if (userName.value.trim().match(/[a-zA-Z]{3,25}/)) {
        userName.style.border = "2px solid green";
        document.getElementById("userError").innerHTML = ""
    }
    else {
        return true;
    }
})

writeDescription.addEventListener("keyup", () => {
    if (writeDescription.value == "") {
        writeDescription.style.border = "2px solid red"
        document.getElementById("descriptionError").innerHTML = "Length should be min 3 and max 150 characters"
        document.getElementById("descriptionError").classList.add("color-red");
    }
    else if (writeDescription.value.trim().match(/[a-zA-Z0-9]{3,150}/)) {
        writeDescription.style.border = "2px solid green";
        document.getElementById("descriptionError").innerHTML = ""
    }
    else {
        return true;
    }
})

dataStatus.addEventListener("change", () => {
    if (dataStatus.value == "") {
        dataStatus.style.border = "2px solid red"
        document.getElementById("optionError").innerHTML = "Select your status"
        document.getElementById("optionError").classList.add("color-red");
    }
    else {
        dataStatus.style.border = "2px solid green";
        document.getElementById("userError").innerHTML = ""
        return true;
    }
})

writeRate.addEventListener("keyup", () => {
    if (writeRate.value == "") {
        writeRate.style.border = "2px solid red"
        document.getElementById("rateError").innerHTML = "This Field is Required"
        document.getElementById("rateError").classList.add("color-red");
    }
    else if (writeRate.value.trim().match(/[^$0-9]/)) {
        document.getElementById("rateError").innerHTML = "Enter valid amount"
        document.getElementById("rateError").classList.add("color-red");
    }
    else if (writeRate.value.trim().match(/[$0-9]/)) {
        writeRate.style.border = "2px solid green";
        document.getElementById("rateError").innerHTML = ""
    }
    else {
        return true;
    }
})

checkBalance.addEventListener("keyup", () => {
    if (checkBalance.value == "") {
        checkBalance.style.border = "2px solid red"
        document.getElementById("balanceError").innerHTML = "This Field is Required"
        document.getElementById("balanceError").classList.add("color-red");
    }
    else if (checkBalance.value.trim().match(/[^$0-9]/)) {
        document.getElementById("balanceError").innerHTML = "Enter valid amount"
        document.getElementById("balanceError").classList.add("color-red");
    }
    else if (checkBalance.value.trim().match(/[$0-9]/)) {
        checkBalance.style.border = "2px solid green";
        document.getElementById("balanceError").innerHTML = ""
    }
    else {
        return true;
    }
})

userDeposite.addEventListener("keyup", () => {
    if (userDeposite.value == "") {
        userDeposite.style.border = "2px solid red"
        document.getElementById("depositError").innerHTML = "This Field is Required"
        document.getElementById("depositError").classList.add("color-red");
    }
    else if (userDeposite.value.trim().match(/[^$0-9]/)) {
        document.getElementById("depositError").innerHTML = "Enter valid amount"
        document.getElementById("depositError").classList.add("color-red");
    }
    else if (userDeposite.value.trim().match(/[$0-9]/)) {
        userDeposite.style.border = "2px solid green";
        document.getElementById("depositError").innerHTML = ""
    }
    else {
        return true;
    }
})
saveButton.addEventListener("click", (e) => {
    let name = document.getElementById("userName").value;
    let description = document.getElementById("writeDescription").value;
    let selectOption = document.getElementById("dataStatus").value;
    let rate = document.getElementById("writeRate").value;
    let balance = document.getElementById("checkBalance").value;
    let deposit = document.getElementById("userDeposite").value;
    if (name == "" || description == "" || selectOption == "" || rate == "" || balance == "" || deposit == "") {
        alert("Submit valid data")
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
    }
})





