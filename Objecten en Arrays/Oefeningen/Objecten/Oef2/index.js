const product = [
    {naam: "Bakboter"},
    {prijs: 6}
]

product["materiaal"] = "Vet";

console.log(product.materiaal);
console.log(product["materiaal"]);

const container = document.createElement("div");
container.style.border = "1px solid #f20000"
container.style.padding = "10px";
container.style.backgroundColor = "#45bacc";
container.style.width = "260px";

const p1 = document.createElement("p");
p1.textContent = "Log met dot:" + product.materiaal;
container.appendChild(p1);

const p2 = document.createElement("p");
p2.textContent = "log met brackets: "+ product["materiaal"];
container.appendChild(p2);

document.body.appendChild(container);
