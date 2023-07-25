/*
    This script handles the content assignment of project data
*/

const pages =
    [
        "portfolio",
        "other-works"
    ]

let pageContent = [];
let portfolioArea = document.getElementById("project-content");

let navBars =
    [
        document.getElementById("nav-bar1"),
        document.getElementById("nav-bar2")
    ]


/* Adds the included text data into the array of text. */
for (let i = 0; i < pages.length; ++i) {
    pageContent.push("");
    fetch("./data/page-main/" + pages[i] + ".html").then(r => r.text()).then(t => pageContent[i] = t)
}

function LoadPortfolio(projIndex) {
    portfolioArea.innerHTML = pageContent[projIndex];

    console.log(navBars.length);
    
    for (let i = 0; i < navBars.length; i++) {
        if (i == projIndex) {
            navBars[i].style.color = '#398cff';
        }
        else {
            navBars[i].style.color = 'rgb(230, 230, 240)';
        }
    }
}