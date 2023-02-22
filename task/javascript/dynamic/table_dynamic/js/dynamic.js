let data = [
    { id: 100, Name: "Karan", Class: "A1", subject: "math" },
    { id: 101, Name: "Viren", Class: "A2", subject: "science" },
    { id: 102, Name: "Raj", Class: "A3", subject: "computer" },
    { id: 103, Name: "Ashish", Class: "A4", subject: "english" }
]

let table = document.createElement("table");

function generateTableHeading(table, data) {
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

function generateTableBody(table, data) {
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (const element of data) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (const key in element) {
            let td = document.createElement("td");
            let text = document.createTextNode(element[key]);
            td.appendChild(text);
            tr.appendChild(td);
        }
    }
}



generateTableHeading(table, data);
generateTableBody(table, data)
let body = document.querySelector("body");

body.appendChild(table)




