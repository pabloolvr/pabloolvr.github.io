/*
    This script handles the content assignment of project data
*/

const projects = 
[
    "pets-rules",
    "tropical-runners",
    "lost-on-tenebris",
    "educa-money",
    "deep-ocean",
    "quizeduca",
    "pong",
    "tower-defense",
    "batalha-da-danca",
    "dananeer",
    "shiboo-survivors",
    "tale-of-darkness",
    "tale-of-souls"
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

    for (let i = 0; i < navBars.length; i++) 
    {
        navBars[i].style.color = 'rgb(230, 230, 240)';
    }
}

