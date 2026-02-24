const cijfers = [1, 2, 3, 4, 5];

const cijfersMaalDrie = cijfers.map((cijfer) => cijfer * 3);

const output = document.createElement("div");
output.innerText = cijfers.join(', '); // originele cijfers getoond als string, gescheiden door komma's met spatie
output.innerText += '\n'; // nieuwe regel / enter
output.innerText += cijfersMaalDrie.join(', '); // cijfers maal drie getoond als string, gescheiden door komma's met spatie

document.body.appendChild(output);
/* voeg hier code toe om het output-element toe te voegen aan de body van de pagina */