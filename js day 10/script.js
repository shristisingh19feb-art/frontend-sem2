const head = document.getElementById("heading");
//head.innerHTML="<i>New Heading</i>";
console.log(head.innerText)
//it will only show the visible text 
console.log(head.innerHTML)
//it will show the complete html (text and tags )inside the element
console.log(head.textContent)
//it will show the complete text inside the element including hidden text
//crud 
//c create 
//r read 
//u update 
//d delete
//DOM modification
//create a new element and set its content 
const newParagraph= document.createElement("p");
newParagraph.textContent="this is a  dynamically created paragraph";
console.log(newParagraph.textContent);

//append the new element to the container 
const container = document.getElementById("container");
("container");
container.appendChild(newParagraph);

//selecting p
const para = document .querySelector("#container p");
para.remove();

let date = new Date();
console.log(date);

setTimeout(()=>{
    console.log("welcome");
   // alert("offer avlid till 12pm")
},5000);

setInterval(()=>{
    let date = new Date();
    console.log(date);
},1000);

function handleclick(){
    document.getElementById("output").textContent="button clicked";
}
