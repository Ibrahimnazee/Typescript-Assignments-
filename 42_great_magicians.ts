// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let Magicians: string []=['harry pottar','finn allen','jerry jeson','jhon charls',]

function make_great(joker:string []){
    for (let joker of Magicians ){
        console.log( `the great magician ${joker}` )

    }
} 

function show_magicians(joker:string []){
    joker.forEach(element =>{
    
    });
   }
   
show_magicians(Magicians);
make_great(Magicians);