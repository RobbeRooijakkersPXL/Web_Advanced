const course = { titel: "Web", studiepunten: 3 };

course.studiepunten += 2;

console.log("het vak" + course.title + "telt nu" + course.studiepunten + "studiepunten");   

const container = document.createElement("div");
container.style.borderLeft = "6px solid #4caf50";
container.style.padding = "8px 12px"
container.style.marginTop = "10px";

const tekst = document.createElement("h3");
tekst.textContent = `Het vak ${course.titel} telt nu ${course.studiepunten} studiepunten`;
tekst.style.color = "#2e7d32";
tekst.style.margin = "0";
container.appendChild(tekst);

document.body.appendChild(container);


