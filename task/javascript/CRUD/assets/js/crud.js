let submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let onlyName = document.getElementById("first");
    let lastName = document.getElementById("last");
    let technology = document.getElementById("tech");
    // Post data :
    let postData = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            onlyName: onlyName.value,
            lastName: lastName.value,
            technology: technology.value,
        })
    }
    fetch("http://localhost:3000/employee", postData)
        .then((response) => (response.json()))
        .then(data => console.log(data));
});

let header = { id: "ID", onlyName: "FIRST NAME", lastName: "LAST NAME", technology: "TECHNOLOGY" };

//create a table
let mainDiv = document.createElement("div");
let table = document.createElement("table");
mainDiv.appendChild(table);

//start : Make table header
function tableHeadingCreate(table, data) {
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    for (const key in data) {
        let th = document.createElement("th");
        let text = document.createTextNode(data[key]);
        th.appendChild(text);
        tr.appendChild(th);
    }
    let th = document.createElement("th");
    let text = document.createTextNode("ACTION");
    th.appendChild(text);
    tr.appendChild(th);
}
tableHeadingCreate(table, header);
// end : table header

// get dataS
async function checkUserHosting() {
    let req = await fetch('http://localhost:3000/employee');
    let res = await req.json();
    return res;
};

checkUserHosting().then(data => console.log(data));

// const a = await checkUserHosting();

// console.log(a);

// console.log(d);
// start : create table body


function tableBodyCreate(table) {
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    checkUserHosting().then(data => {
        for (const element of data) {
            let tr = document.createElement("tr");
            tbody.appendChild(tr);
            for (const item in header) {
                let td = document.createElement("td");
                let text = document.createTextNode(element[item]);
                td.appendChild(text);
                tr.appendChild(td);
            }
            let deleteButton = document.createElement("button");
            let deleteText = document.createTextNode("Delete");
            deleteButton.addEventListener("click", e => {
                fetch(`http://localhost:3000/employee/${element["id"]}`, { method: "DELETE" })
                table.deleteRow(tr.rowIndex);
            })
            deleteButton.appendChild(deleteText);
            tr.appendChild(deleteButton);

            let editButton = document.createElement("button");
            let editText = document.createTextNode("Edit");
            editButton.addEventListener("click", e => {
                rowEdit(element)
            })
            editButton.appendChild(editText);
            tr.appendChild(editButton);
        }
    });

}
tableBodyCreate(table);
// end : table body
let updateButton = document.querySelector(".updateButton")

function rowEdit(element) {
    let onlyName = document.getElementById("first");
    let lastName = document.getElementById("last");
    let technology = document.getElementById("tech");
    onlyName.value = element.onlyName;
    lastName.value = element.lastName;
    technology.value = element.technology;

    updateButton.addEventListener("click", e => {
        let editData = {
            onlyName: onlyName.value,
            lastName: lastName.value,
            technology: technology.value,
        }
        // data edit
        fetch(`http://localhost:3000/employee/${element.id}`, {
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

let body = document.querySelector("body");
body.appendChild(mainDiv);