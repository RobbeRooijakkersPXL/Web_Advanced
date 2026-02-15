const pikachu = {
  name: "pikachu",
  height: 4,
  weight: 60,
  abilities: [
    {
      ability: {
        name: "static",
        url: "https://pokeapi.co/api/v2/ability/9/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "lightning-rod",
        url: "https://pokeapi.co/api/v2/ability/31/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  sprites: {
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
  },
};

console.log(pikachu.name);
console.log(pikachu.height);
console.log(pikachu.abilities[0].ability.name);
console.log(pikachu.abilities[0].is_hidden);


const container = document.createElement("div");
container.style.border = "2px solid #333"
container.style.borderRadius = "10px";
container.style.width = "300px";
container.style.padding = "20px";

const pokemonName = document.createElement("h1");
pokemonName.textContent = pikachu.name.toUpperCase();
container.appendChild(pokemonName);

const pokemonAfbeelding = document.createElement("img");
pokemonAfbeelding.src = pikachu.sprites.front_shiny;
pokemonAfbeelding.alt = pikachu.name; //FF nakijken waarom dit is
container.appendChild(pokemonAfbeelding);

const pokemonHeight = document.createElement("p");
pokemonHeight.textContent = "Height: " + pikachu.height;
container.appendChild(pokemonHeight);

const pokemonWeight = document.createElement("p");
pokemonWeight.textContent = "Weight: " + pikachu.weight;
container.appendChild(pokemonWeight);

const pokemonAbilitiesTitle = document.createElement("h3");
pokemonAbilitiesTitle.textContent = "Abilities:".toUpperCase();
container.appendChild(pokemonAbilitiesTitle);

const pokemonAbilitiesList = document.createElement("ul");    //Forlus van AbilityList belangrijk! Zeker nog eens nakijken (logica is moeilijer)
for (let i = 0; i < pikachu.abilities.length; i++) {    
    const ability = pikachu.abilities[i];

    const abilityItem = document.createElement("li");
    let abilityText = ability.ability.name;
    if (ability.is_hidden){
        abilityText += " (Hidden)"
    }

    abilityItem.textContent = abilityText;
    pokemonAbilitiesList.appendChild(abilityItem)
    
}

container.appendChild(pokemonAbilitiesList);
document.body.appendChild(container);
