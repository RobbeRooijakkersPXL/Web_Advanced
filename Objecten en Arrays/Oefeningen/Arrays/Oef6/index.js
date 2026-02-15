const takenlijst = [];

for(let i = 0; i < 3; i++){
    takenlijst.push(prompt("Geef 3 taken op die in de array moeten"));
}


const container = document.createElement("div");
container.style.border = "1px solid purple";
container.style.padding = "10px";
container.style.width = "300px";

const titel = document.createElement("h4");
titel.textContent = "Taken";
titel.style.color = "#6a1b9a";
titel.style.margin = "0 0 6px 0";
container.appendChild(titel);

//Forloop maken om elke taak in een li te steken onder ol
const ol = document.createElement("ol");
for (let i = 0; i < takenlijst.length; i++) { //Herhaal voor de lengte van array takenlijst
    const li = document.createElement("li");
    li.textContent = takenlijst[i]; //voor elk nummer dat we takenlijst overlopen, steek i in li
    ol.appendChild(li);
}
container.appendChild(ol);
document.body.appendChild(container);


// Moeilijke oefening, zeker nog eens herhalen