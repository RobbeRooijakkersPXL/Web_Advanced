let invoer; 
let invoer2; 

while(invoer !== "STOP" && invoer2 !== "stop"){
    invoer = prompt("Speler 1, blad - steen - schaar?");
    invoer2 = prompt("Speler 2, blad - steen - schaar?");

if (invoer === "STOP" || invoer2 === "STOP"){
    alert("Het spel is afgelopen");
}
else if (invoer === invoer2) {
  alert("Gelijkspel!");
} else if (
  (invoer === "blad" && invoer2 === "steen") ||
  (invoer === "steen" && invoer2 === "schaar") ||
  (invoer === "schaar" && invoer2 === "blad")
) {
  alert("Speler 1 wint!");
} else if (
  (invoer2 === "blad" && invoer === "steen") ||
  (invoer2 === "steen" && invoer === "schaar") ||
  (invoer2 === "schaar" && invoer === "blad")
) {
  alert("Speler 2 wint!");
}
}


    

