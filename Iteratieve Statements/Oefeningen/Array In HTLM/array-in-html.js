const dieren = ["Hond", "Kat", "Papegaai", "Hamster"];

const lijst = document.querySelector("#dierenlijst");

for (let i = 0; i < dieren.length; i++) {
    const li = document.createElement("li");
    const dier = dieren[i];
    li.innerText = dier;
    lijst.appendChild(li);
}

