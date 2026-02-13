const persoon = {
    naam: "Robbe",
    adress: {
        straat:"Bamboezellaan",
        nr: 1,
        gemeente:"Hamont",
    },
};

//toUpperCase zorgt ervoor dat je alles in hoofdletter drukt

console.log( 
    persoon.adress.straat.toUpperCase(),
    persoon.adress.nr,
    persoon.adress.gemeente.toUpperCase() + " - " + persoon.naam.toUpperCase()

);

const container = document.createElement("div");
container.style.border = "1px dashed #bbb";
container.style.padding = "8px";
container.style.width = "320px";

const titel = document.createElement("h4");
titel.textContent = "Info Adress Persoon";
titel.style.textColor = "#1565c0";

container.appendChild(titel);

const pAdress = document.createElement("p");
pAdress.textContent = persoon.adress.straat.toUpperCase() + persoon.adress.nr + persoon.adress.gemeente + " - " + persoon.naam;

container.appendChild(pAdress);
document.body.appendChild(container);