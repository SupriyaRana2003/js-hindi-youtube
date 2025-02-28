//Date

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date(2023,0,23,5,3);
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()
// console.log(myTimeStamp);  //it is calculate minitime
// console.log(myCreatedDate.getTime());  //it is calculate minitime
// console.log(Math.floor( Date.now()/1000));
let newDate = new Date()
// console.log((newDate));
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

 let secondDate = newDate.toLocaleString('default',{
    weekday :"long",
})

console.log(secondDate);












