const naam = prompt("Wat is je naam?");
const leeftijd = prompt("Wat is je leeftijd?");
const stad = prompt("Waar woon je?");

const profiel = {
    naam,
    leeftijd,
    stad
};



const container = document.createElement("container"); 
container.style.backgroundColor = "#fffbe6";
container.style.padding = "12px";
container.style.border = "1px solid #f0e1a1";
container.style.width = "300px";

const title = document.createElement("h3");
title.textContent = "Welcome " + profiel.naam;
title.style.marginTop = "0";
container.appendChild(title);

const pStad = document.createElement("p");
pStad.textContent = "Je woont in:" + profiel.stad;
pStad.style.margin = "4px 0";
container.appendChild(pStad);

const pLeeftijd = document.createElement("p");
pLeeftijd.textContent = "Je woont in:" + profiel.leeftijd;
pLeeftijd.style.margin = "4px 0";
container.appendChild(pLeeftijd);

document.body.appendChild(container);
