//substring
// let str = "javascript is amazing";
// let sub= str.substring(-2,2);
// console.log(sub)

//slice 
let str = "javascript is amazing";
let sub = str.slice(-2,2);
console.log(sub)

//index
const paragraph ="The quick brown fox jumps over the lazy dog. If the dog barked,was it really lazy ?.";
const indexOfFirst =paragraph.indexOf("dog");
console.log(indexOfFirst);

//replace
let sentence="i love javascript, javascript is powerful";
let newsentence=sentence.replace("javascript","node.js")

//string literals 
let firstname = `${firstname}:this is my first name;${lastname}this is my last name`;
console.log (fullname);

let university ="K.R Mangalam";
let program="BCA AI/DS";
console.log("My name is S.P Archarya and i am pursuing"+""+
    program+"from"+university
)
console.log(`My name is S.P Archarya and i am pursuing ${program} from ${university}`)

//spread operator...concat
let arr=[1,2,3]
let arr2=[4,5,6]
let newArray=[...arr,...arr2];
console.log(newArray)
