// Tests for equality and inequality with strings
// Equality and Inequality test 1
console.log("Equality test with string: ", "apple" === "apple");
// Inequality test 2
console.log("Inequality test with string: ", ("apple" as string) != "orange");

//  Tests using the lower case function
console.log("lower case function test:", "HELLO".toLowerCase() ==="hello" );

//  Numerical tests involving equality 
console.log("Equlaity test with number:", 10 === 10 );
//  Numerical tests  inequality
console.log("Enquality test with number:", (10 as number) != 20 );

// greater than and less than
console.log("greater than test:", 10 > 5 );
// less than
console.log("less than test:", 5 < 10 );

//  greater than or equal to
console.log("greater than or equal to test: ", 10>= 10);
// less than or equal to
console.log("less than or equal to test:", 5<=10);

//  Tests using "and" operators
console.log("And operator test:", 5===5 && 10>5);
//  Tests using "or" operators
console.log("or operator test:", 5===5 || false);

// Test whether an item is in a array
let fruite :string[] = ["apple","orange","banana"];
console.log('test "apple" in array:', fruite.includes("apple"));
//  Test whether an item is not in a array
console.log('test "mango" is not in array:', !fruite.includes("mango"));










