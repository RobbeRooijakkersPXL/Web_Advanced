const wagen = {
  merk: "Opel",
  model: "Manta 400",
  bouwjaar: 1981,
};

const tbody = document.querySelector("tbody");
for(let key in wagen){
  const tr = document.createElement("tr");
  const tdKey = document.createElement("td");
  tdKey.innerText = key; //Pak hier de dingen die in Wagen zitten (merk, ...)
  const tdValue = document.createElement("td");
  tdValue.innerText = wagen[key];

  tr.appendChild(tdKey);
  tr.appendChild(tdValue);

  tbody.appendChild(tr);

}