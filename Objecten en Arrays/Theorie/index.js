const vakken = ["Web Essentials","Web Advanced", "C# Essentials"];

const aantalVakken = vakken.length; //Aantal vakken in Array
const eersteVak = vakken[0]; //Eerste vak uit Array vakken -> Web Essentials
const laatsteVak = vakken[aantalVakken -1]; //Laatste Vak pakken

vakken[1] = "C# Advanced"; //Array aanpassen
vakken.push("IT organisation") //Toevoegen aan de laatste plek in de array

const vakkenString = vakken.join(" - ");
console.log(vakkenString);


//Toekennen van waarden binnen array strings
const persoon = {
    naam: "Robbe",
    leeftijd : 20,
    iq: 100
}

persoon.woonplaats = "Hamont";
persoon.iq = 101;

//Meerdere binnen 1 array

const personen = [
    {naam: "Robbe", leeftijd: 20, iq: 102},
    {naam: "Bard", leeftijd: 21, iq: 15},
    {naam: "Joost", leeftijd: 22, iq: 160}

]
    
personen[1].leeftijd = 22; //Pak persoon 2 uit personen en verander de leeftijd
console.log(personen);