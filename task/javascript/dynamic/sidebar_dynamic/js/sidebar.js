let sidemenu = [
    { Name: "Google", link: "https://www.google.com/" },
    { Name: "Gmail", link: "https://www.gmail.com/" },
    { Name: "Dashboard", link: "www.dashboard.com" }
];


let aside = document.createElement("aside");


function generateSideBar(aside, sidemenu) {
    let ul = document.createElement("ul");
    aside.appendChild(ul);
    for (const iterator of sidemenu) {
        let li = document.createElement("li");
        ul.appendChild(li);
        let a = document.createElement("a");
        li.appendChild(a);
        let text = document.createTextNode(iterator.Name);
        a.appendChild(text);
        a.setAttribute("href", iterator.link)
    }
}


generateSideBar(aside, sidemenu);
let body = document.querySelector("body");


body.appendChild(aside);

