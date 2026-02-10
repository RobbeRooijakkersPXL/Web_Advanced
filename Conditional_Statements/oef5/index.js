const leeftijd = prompt("Voer je leeftijd in:");


if (leeftijd < 18 && volwasseneAanwezig.toLowerCase() === "nee") {
  console.log(
    "Je bent niet volwassen en er is geen volwassene aanwezig, je mag niet binnen."
  );
} else {
  console.log("Je mag binnen");
}



