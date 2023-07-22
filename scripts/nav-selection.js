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

/* Adds the included text data into the array of text. */
for (let i = 0; i < pages.length; ++i) {
    pageContent.push("");
    fetch("./data/page-main/" + pages[i] + ".html").then(r => r.text()).then(t => pageContent[i] = t)
}

function LoadPortfolio(projIndex) {
    portfolioArea.innerHTML = pageContent[projIndex];
    //portfolioArea.style.opacity = 1;
}