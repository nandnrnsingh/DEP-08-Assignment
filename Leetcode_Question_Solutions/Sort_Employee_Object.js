const emp = [
    {name : "Rupak" , DOB : "02/05/2002",score : 40},
    {name : "Nand" , DOB : "02/05/2002" , score : 100},
    {name : "Abhay" , DOB : "02/05/2002" , score : 70},
    {name : "Athrav" , DOB : "02/05/2002" , score : 50},
    
];

emp.sort((a,b) => a.score - b.score);
console.log(emp);
