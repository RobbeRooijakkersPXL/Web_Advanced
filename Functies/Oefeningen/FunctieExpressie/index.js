function berekenOmtrek(x,y){
    return (x + y) * 2;

};

function berekenOppervlakte(x,y){
    let som = x * y;
    return som;
};

//Verderbouwing



const form = document.querySelector("form");
form.addEventListener("submit", function (event){
    event.preventDefault();

    const lengteInput = document.querySelector("#getal1");
    const breedteInput = document.querySelector("#getal2");

    const lengte = Number(lengteInput.value);
    const breedte = Number(breedteInput.value);

    const oppervlakteBerekenen = berekenOppervlakte(lengte, breedte);
    const oppervlakteWeergave = document.querySelector("#oppervlakte");
    oppervlakteWeergave.innerText = `De oppervlakte is ${oppervlakteBerekenen}`;



    const omtrekBerekenen = berekenOmtrek(lengte, breedte);
    const omtrekWeergave = document.querySelector("#omtrek");
    omtrekWeergave.innerText = `De omtrek is ${omtrekBerekenen}`;



});
