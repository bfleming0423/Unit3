//Beau Fleming


//Write a program that will print this array and an array with only people of age 18 or higher. Use filter.

//array of objects
var people = [
    { name: 'Sally', age: 32 },
    { name: 'Bob', age: 23 },
    { name: 'Jim', age: 16 },
    { name: 'Scott Rhine', age: 7 },
    { name: 'Angie Davison', age: 4 },
    { name: 'James Munger', age: 3 }
];


//this will use .amp to go one by one and return the name value of all objects in the list rather than using for loops and appending.
let allPeople = people.map(person => person.name);
//display results to doc
document.getElementById("allPeople").innerHTML = allPeople;
console.log(allPeople);


//this uses filter and uses the conditional statement to determine whether to add the value
let people18 = people.filter(person => person.age >= 18);
//then need to single out just the name.
let people18Name = people18.map(person => person.name)

//display results to doc
document.getElementById("people18Up").innerHTML = people18Name;
console.log(people18Name);
