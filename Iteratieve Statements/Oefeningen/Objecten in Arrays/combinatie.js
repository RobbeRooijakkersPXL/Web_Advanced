const studenten = [
  { naam: "John Duck", leeftijd: 34, isIngeschreven: true },
  { naam: "Jane Duck", leeftijd: 20, isIngeschreven: false },
  { naam: "Samson", leeftijd: 35, isIngeschreven: true },
];

const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");


//Head
const headRow = document.createElement("tr");
const eigenschappen = Object.keys(studenten[0]);

for(const eigenschap of eigenschappen){
    const th = document.createElement("th");
    th.innerText = eigenschap;
    headRow.appendChild(th);
}

tableHead.appendChild(headRow);

//Body
for (const student of studenten){
    const row = document.createElement("tr");
    for (const eigenschap in student){
        const td = document.createElement("td");
        td.innerText = student[eigenschap];
        row.appendChild(td);
    }
    tableBody.appendChild(row);
}