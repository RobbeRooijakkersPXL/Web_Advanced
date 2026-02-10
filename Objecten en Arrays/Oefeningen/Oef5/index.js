const naam = prompt("Wat is je naam?");
const leeftijd = prompt("Wat is je leeftijd?");
const stad = prompt("Waar woon je?");

const profiel = {
    naam,
    leeftijd,
    stad
};

alert(
    `Naam: ${profiel.naam}, Leeftijd: ${profiel.leeftijd}, Stad: ${profiel.stad}`
)

