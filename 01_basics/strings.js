// primitive datatype
/*
7types
string
number
boolean
null
undefined
bigint



*/


//non-primitive
/*
object
array
function


*/

//Stack(primitive), Heap(non-primitive)

// //primitive
// let myYoutubename = "supriyarana";
// let anothername = myYoutubename;
// anothername = "supriya"
// console.log(anothername);
// console.log(myYoutubename);

//non-primitive

// let userOne={
//     email:"supriya@ gmail.com",
//     upi :"user@bl"


// }
//  let userTwo =userOne;
//  userTwo.email = "supriya@gmail.com",
//  console.log(userTwo.email);
//  console.log(userOne.email);



const url = "http://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
let gameName = "supriya-rana";
console.log(gameName.split('-'));