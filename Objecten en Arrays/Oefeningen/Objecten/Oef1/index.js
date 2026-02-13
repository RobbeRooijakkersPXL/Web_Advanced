const student = {};

student.naam = "Robbe";
student.leeftijd = 20;
student.isIngeschreven = true;

console.log(student);

const paragraph = document.createElement("p");
paragraph.innerText =
  student.naam +
  " is " +
  student.leeftijd +
  " jaar oud en isIngeschreven is: " +
  student.isIngeschreven;

document.body.appendChild(paragraph);