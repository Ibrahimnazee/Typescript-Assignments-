
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

let current_users: string[]=['IbraHim','DaNiyal','SaLman','Hamza','jhon'];

let new_users: string[]=['Bilal','Taha','Jameel','Hamza'];

new_users.forEach(newUsername =>{
    let lowerCase:string = newUsername.toLowerCase();

    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
     console.log(`The username ${newUsername} is not available.please write a diffrent username`);

    }
else{
    console.log(`The username ${newUsername} is available`);
}

})