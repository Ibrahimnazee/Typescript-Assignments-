

function make_album(artist:string, title:string , tracks?:number){
    const album:{artist:string, title:string , tracks?:number} ={

        artist: artist,
        title : title
    }
    if (tracks !==undefined){
album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('album1','artist title 1');
console.log(album1);

const album2 = make_album('album2','artist title 2');
console.log(album2);

const album3 = make_album('album3','artist title 3',12);
console.log(album3);