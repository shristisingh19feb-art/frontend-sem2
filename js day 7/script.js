///var a=10;
//////console.log(a);
//function demo(){
  //  let b =20;
    //console.log(b);
//}
//demo();



//let user ={
   // name: "Shristi",
    //address: "gurugram",
    //mobileno: 1234567890,
    //favcolour:["black","white","blue"]
//}
 //console.log(user);

// console.log("My name is"+user.name+"my fav colour is "+user.favcolour[2]);

// string literal
 //console.log(`My name is ${user.name} my fav colour is ${user.favcolour[2]}`);


let user2 ={
   name: "Anjali",
    address:{
       city: "gurugram",
        state: "haryana"
    },
    mobileno: 9876543210,
    favcolour:["red","pink","purple"],
   demo: function(){
       return"demo function"
}
}
console.log(user2.address.city,user2.favcolour[1],user2.demo());

//OBJECT METHODS 
//Object.keys(variable name )

//console.log(Object.keys(user));

//console.log(Object.values(user));

//console.log(Object.entries(user));

// Object.freeze()
//const car = { make: "Mahindra", model: "Thar" };
//Object.freeze(car);//we can't add a new key value pair and we CANT CHANGE THE EXISTING VALUE 

//Object.seal(car) //we cant add a new key value pair but we CAN CHANGE AND UPDATE THE EXISTING VALUE 
//car.model="XUV700"
//car.color="zblack";
//console.log(car);
