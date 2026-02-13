const honderrassen = [ "herder", "labrador", "bulldog","beagle"];

const nr = prompt("Kies een nummer tussen 1 en 4");
const keuze = parseInt(nr);

if(keuze <= 4 && keuze >= 1){
    const p = document.createElement("p");
    p.textContent = "Een " + honderrassen[keuze - 1] + " is bijna even mooi als een ";
    honderrassen.unshift("Engelse Cocker");
    
    const mooieHond = document.createElement("span");
    mooieHond.textContent = honderrassen[0];
    mooieHond.style.fontWeight = "bold";

    p.appendChild(mooieHond);  
    document.body.appendChild(p);
}else{
    const error = document.createElement("h1");
    error.textContent = "Sorry, kattenliefhebbers niet toegelaten!"
    error.style.color = "red";
    error.style.textDecoration = "underline";

    document.body.appendChild(error);
}




