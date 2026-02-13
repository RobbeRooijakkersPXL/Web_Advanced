const fruit = ["appel", "banaan", "kers", "druif", "mango"];

const container = document.createElement("div");
container.style.border = "1px dotted #67bf82";
container.style.padding = "10px";
container.style.width = "280px";

const p1 = document.createElement("p");
p1.textContent = "eerste fruit: " + fruit[0];
p1.style.margin =  "4px 0";
container.appendChild(p1);

const p2 = document.createElement("p");
p2.textContent = "eerste fruit: " + fruit[2];
p2.style.margin =  "4px 0";
container.appendChild(p2);

const p3 = document.createElement("p");
p3.textContent = "eerste fruit: " + fruit[fruit.length - 1];
p3.style.margin =  "4px 0";
container.appendChild(p3);

document.body.appendChild(container);