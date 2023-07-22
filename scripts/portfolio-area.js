/*
    This script handles the content assignment of project data
*/

const projects = 
[
    "pets-rules",
]

let projectText = [];

let projTextArea = document.getElementById("project-content");

/* Adds the included text data into the array of text. */
for(let i = 0; i < projects.length; ++i)
{
    projectText.push("");
    fetch("./data/page-portfolio/" + projects[i] + ".html").then( r => r.text() ).then( t => projectText[i] = t )
}

function LoadProject(projIndex)
{
    projTextArea.innerHTML = projectText[projIndex];
    //projTextArea.style.opacity = 1;
}