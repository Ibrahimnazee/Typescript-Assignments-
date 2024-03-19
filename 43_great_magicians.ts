// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

 

let Magicians: string []=['harry pottar','finn allen','jerry jeson','jhon charls',]

function coppyArray(arr:string []){
   return [...arr]

}
// function make_great(joker:string []){
//         for (let joker of Magicians ){
//             console.log( `the great magician ${joker}` )
    
//         }
//     } 
    
function make_great(magicianArray:string []){
    for (let i =0; i<magicianArray.length; i++){
        magicianArray [i] = 'the great ' + magicianArray[i]
    }
}

    function show_magicians(joker:string []){
    joker.forEach(element => {
    console.log(element);
    });
   }
   
  const coppymagicianArray = coppyArray(Magicians);

  make_great(coppymagicianArray);

console.log('\n\nthis is my original array:');
show_magicians(Magicians);

console.log('\n\nthis is my copy modified array:');
show_magicians(coppymagicianArray);

