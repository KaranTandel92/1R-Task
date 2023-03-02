let data =
    { id: "ID", name: "NAME", technology: "TECHNOLOGY", action: "ACTION" };

let formfirst = document.getElementById("form");

formfirst.addEventListener("submit", (event) => {
    event.preventDefault();
    let fullname = document.getElementById("firstname");
    let technology = document.getElementById("tech");
    // console.log(s);
    let dataPost = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fullname: fullname.value,
            technology: technology.value
        }
        ),
    }
    fetch("http://localhost:3000/newEmployee", dataPost)
        .then((response) => (response.json()))
        .then(data => console.log(data))
        .catch(error => console.log(error));
    // return dataStr;
    tableBody();
});


window.addEventListener("load", (e) => {
    e.preventDefault();
    tableBody();
})
//create a table
let table = document.createElement("table");
table.className = "table";


//make table heading
function createTableHeading(table, data) {
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    for (const key in data) {
        let th = document.createElement("th");
        th.className = "th";
        let text = document.createTextNode(data[key]);
        th.appendChild(text);
        tr.appendChild(th);
    }
}
createTableHeading(table, data);
// end table heading

// make table body
let tbody = document.createElement("tbody");
table.appendChild(tbody);


function tableBody() {
    tbody.innerHTML = " "
    fetch("http://localhost:3000/newEmployee").then(response => response.json()).then(data => {
        for (const element of data) {

            let tr = document.createElement("tr");
            tr.className = "tr";
            tbody.appendChild(tr);

            let td1 = document.createElement("td");
            td1.className = "td";
            let td1Text = document.createTextNode(element["id"]);
            td1.appendChild(td1Text);
            tr.appendChild(td1);

            let td2 = document.createElement("td");
            td2.className = "td2";
            let td2Text = document.createTextNode(element["fullname"]);
            td2.appendChild(td2Text);
            tr.appendChild(td2);

            let td3 = document.createElement("td");
            td3.className = "td3";
            let td3Text = document.createTextNode(element["technology"]);
            td3.appendChild(td3Text);
            tr.appendChild(td3);

            // create delete button
            let td4 = document.createElement("td");
            td4.className = "td4";
            let deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            let deleteText = document.createTextNode("Delete");
            deleteButton.appendChild(deleteText);
            deleteButton.addEventListener("click", e => {
                fetch(`http://localhost:3000/newEmployee/${element["id"]}`, { method: "DELETE" }) // data delete from the json server (or data base)
                // .catch(err => console.log(err));
                e.preventDefault();
                table.deleteRow(tr.rowIndex); // row delete from the table
            })
            td4.appendChild(deleteButton);
            tr.appendChild(td4);

            // create edit button
            let td5 = document.createElement("td");
            td5.className = "td";
            let editButton = document.createElement("button");
            editButton.className = "edit-button";
            let editText = document.createTextNode("Edit");
            editButton.appendChild(editText);
            editButton.addEventListener("click", (e) => {
                rowEdit(element)
            });
            td5.appendChild(editButton);
            tr.appendChild(td5);
        }
    }).catch(err => console.log(err))
}
//end table body

let updateButton = document.getElementById("updatebutton");

function rowEdit(element) {
    let fullname = document.getElementById("firstname");
    let technology = document.getElementById("tech");
    fullname.value = element.fullname;
    technology.value = element.technology;

    // event given on edit button
    updateButton.addEventListener("click", (e) => {
        let editData = {
            fullname: fullname.value,
            technology: technology.value
        }
        // console.log(element.id);
        fetch(`http://localhost:3000/newEmployee/${element.id}`, { // element.id : it will give edit the specific data
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editData),
        })
            .then((response) => (response.json()))
            .then(data => console.log(data))
    })
};

let searchMenu = document.getElementById("searchMenu");
searchMenu.addEventListener("keyup", (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/newEmployee").then(response => response.json()).then(data => {
        let array = data.filter(item => searchMenu.value == " " || item.fullname.toLowerCase().includes(searchMenu.value) || item.technology.includes(searchMenu.value));
        tbody.innerHTML = " "
        for (const element of array) {
            let tr = document.createElement("tr");
            tr.className = "tr";
            tbody.appendChild(tr);

            let td1 = document.createElement("td");
            td1.className = "td";
            let td1Text = document.createTextNode(element["id"]);
            td1.appendChild(td1Text);
            tr.appendChild(td1);

            let td2 = document.createElement("td");
            td2.className = "td2";
            let td2Text = document.createTextNode(element["fullname"]);
            td2.appendChild(td2Text);
            tr.appendChild(td2);

            let td3 = document.createElement("td");
            td3.className = "td3";
            let td3Text = document.createTextNode(element["technology"]);
            td3.appendChild(td3Text);
            tr.appendChild(td3);

            // create delete button
            let td4 = document.createElement("td");
            td4.className = "td4";
            let deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            let deleteText = document.createTextNode("Delete");
            deleteButton.appendChild(deleteText);
            deleteButton.addEventListener("click", e => {
                fetch(`http://localhost:3000/newEmployee/${element["id"]}`, { method: "DELETE" }) // data delete from the json server (or data base)
                // .catch(err => console.log(err));
                e.preventDefault();
                table.deleteRow(tr.rowIndex); // row delete from the table
            })
            td4.appendChild(deleteButton);
            tr.appendChild(td4);

            // create edit button
            let td5 = document.createElement("td");
            td5.className = "td";
            let editButton = document.createElement("button");
            editButton.className = "edit-button";
            let editText = document.createTextNode("Edit");
            editButton.appendChild(editText);
            editButton.addEventListener("click", (e) => {
                rowEdit(element)
            });
            td5.appendChild(editButton);
            tr.appendChild(td5);
        }
        console.log(array);
    });
})

let body = document.querySelector("body");
body.appendChild(table);