// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// •   // If the alien is green,that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.



let alien_colors: string = "green";
// If the alien is green,
// print a message
// version 1
if (alien_colors === 'green'){
    console.log("the player earned 5 points.");
}else if (alien_colors ==="yellow"){
    console.log(" the player earned 10 points. ");
}else if (alien_colors === "red"){
    console.log("the player earned 15 points.")
} else{
console.log ('please select the right color')
}

// version 2
alien_colors ="yellow";
if (alien_colors === 'green'){
    console.log("the player earned 5 points.")
}else if (alien_colors === 'yellow'){
    console.log("the player earned 10 points.")
}else if (alien_colors ==='red'){
    console.log("the player earned 15 points.")
}else{
    console.log("please select the right color")
}

// version 3
alien_colors ="red";
if (alien_colors === 'green'){
    console.log("the player earned 5 points.")
}else if (alien_colors === 'yellow'){
    console.log("the player earned 10 points.")
}else if (alien_colors ==='red'){
    console.log("the player earned 15 points.")
}else{
    console.log("please select the right color")
}