
let Guest_List : string[] = ['Salman Khan','Shahrukh Khan','Amir Khan',];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_guest : string = 'Salman Khan';
let new_guest : string = 'Kamran tessori';
Guest_List[0] = new_guest ;

// for(let i=0; i<Guest_List.length; i++){
//  console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Mr. ${absent_guest} is not coming to Party.` )
console.log('Good News! we find the big table so we are inviting 3 more guests.')

Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Shahid Afridi');
Guest_List.push('Babar Azam');

for(let i=0; i<Guest_List.length; i++){
console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
// sorry message to guest for not inviting.
console.log('\nSorry we can not arrange big table, only two people will be invited.')


// yahan per mene guest remove kr dye hain.
while(Guest_List.length >2 ){
    let remove_guest = Guest_List.pop();
    console.log (` Sorry Mr. ${remove_guest} , you not invited for dinner.`)
}

//hamhre bache hue 2 inivted guest
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\n You Are Still Inivited\n\nThank You!\n\n')
    }
    
    // mene sare guest array se remove kr dye.
    Guest_List.splice(0,2);
    console.log(Guest_List);