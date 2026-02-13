const gebruiker = {naam: "Simon", email: "simon@gmail.com", wachtwoord: "mongool als je dit hier opslaat"};

delete gebruiker.wachtwoord;
console.log(gebruiker);

const section = document.createElement("div");
section.style.border = "1px solid #67bf82";
section.style.borderRadius = "8px";
section.style.padding = "10px";
section.style.width = "280px";

const title = document.createElement("h4");
title.textContent = "gebruiker";
title.style.margin = "0 0 8px 0";
section.appendChild(title);

const naamEl = document.createElement("p");
naamEl.textContent = "Naam: " + gebruiker.naam;
section.appendChild(naamEl);

const emailEl = document.createElement("p");
emailEl.textContent = "Email: " + gebruiker.email;
section.appendChild(emailEl);

document.body.appendChild(section);


//Moeilijke oefening, zeker nog eens nakijken (opgave was ook onduidelijk)
