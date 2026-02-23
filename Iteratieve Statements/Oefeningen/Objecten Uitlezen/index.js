const student = 
    {
    naam : "Robbe",
    leeftijd: 20,
    isIngeschreven: true
};

for(let key in student){
    console.log(`${key}: ${student[key]} `)
}