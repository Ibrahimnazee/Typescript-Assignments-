//  Write a program that creates Objects containing these items.
const personName_Array :string[] = ['person','car','laptop'];

//  person object
interface person {
   name : string,
    age : number,
    nationality : string,
    student : boolean,
}
 let person :person ={
     name : 'ibrahim ', 
     age : 24,
     nationality : 'pakistan',
     student : true,
}
console.log(person);

// car object

interface car {
    brand : string,
    color : string ,
    model: number,
    automatic : boolean,
}

 let car :car={
    brand : 'toyota',
    color : 'black',
    model : 2022,
    automatic : true,
     
}
console.log(car);

// laptop object
interface laptop {  
    brand : string ,
    color: string,
    generation : number,
    electronic : boolean,
}
let laptop :laptop={
     brand : 'dell',
     color : 'silver',
     generation : 7,
    electronic: true,
}
console.log(laptop);
