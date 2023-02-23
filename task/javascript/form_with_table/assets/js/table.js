let data = [
    { id: 1, Name: "Karan", technology: "front-end-develeoper", action: "" },
    { id: 2, Name: "Ronak", technology: "full-stack-developer", action: "" },
    { id: 3, Name: "Viren", technology: "ui-developer", action: "" },
    { id: 4, Name: "Raj", technology: "front-end-develeoper", action: "" },
];

let formfirst = document.getElementById("form");
formfirst.addEventListener("submit", (event) => {
    event.preventDefault();
    let getData = new FormData(form) // get data from the form
    let dataconvert = Object.fromEntries(getData.entries()); // convert it from array to object
    let dataStr = JSON.stringify(dataconvert);
    // console.log(s);
    let dataPost = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: dataStr,
    }
    fetch("http://localhost:3000/newEmployee", dataPost)
        .then((response) => (response.json()))
        .then(data => console.log(data));
    return dataStr;
});


//create a table
let table = document.createElement("table");


//make table heading
function createTableHeading(table, data) {
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    for (const key in data[0]) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        tr.appendChild(th);
    }
}
// //end table heading

// //make table body
function createTableBody(table, data) {
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (const element of data) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        // for (const value in element) {
        //     let td = document.createElement("td");
        //     let text = document.createTextNode(element[value]);
        //     td.appendChild(text);
        //     tr.appendChild(td);
        // }
        let td1 = document.createElement("td");
        let td1Text = document.createTextNode(element["id"]);
        td1.appendChild(td1Text);
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        let td2Text = document.createTextNode(element["Name"]);
        td2.appendChild(td2Text);
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        let td3Text = document.createTextNode(element["technology"]);
        td3.appendChild(td3Text);
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        let btn1 = document.createElement("button");
        let btn1Text = document.createTextNode("Delete");
        btn1.appendChild(btn1Text);
        td4.appendChild(btn1);
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        let btn2 = document.createElement("button");
        let btn2Text = document.createTextNode("Edit");
        btn2.appendChild(btn2Text);
        td5.appendChild(btn2);
        tr.appendChild(td5);
    }
}
//end table body

createTableHeading(table, data);
createTableBody(table, data);

let body = document.querySelector("body");
body.appendChild(table);