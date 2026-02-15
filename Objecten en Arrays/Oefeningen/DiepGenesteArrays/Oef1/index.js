const personen = [
  { voornaam: "John", achternaam: "Duck", leeftijd: 34 },
  { voornaam: "Jane", achternaam: "Duck", leeftijd: 30 },
  { voornaam: "Gert", achternaam: "Verhulst", leeftijd: 57 },
  { voornaam: "Sam", achternaam: "Son", leeftijd: 16 },
];

//Geef aan welke array, kies daarna wat in de Array
console.log(personen[1].voornaam);
console.log(personen[3].leeftijd);

const container = document.createElement("div");
container.style.border = "1px solid orange";
container.style.padding = "10px";
container.style.width = "300px";

const p1 = document.createElement("p");
p1.textContent = personen[1].voornaam;
p1.style.fontWeight = "700";
container.appendChild(p1);

const p2 = document.createElement("p");
p2.textContent = personen[3].leeftijd;
p2.style.fontWeight = "700";
container.appendChild(p2);

document.body.appendChild(container);