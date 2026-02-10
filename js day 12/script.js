document.getElementById("myInput");
addEventListener("change",()=>{
document.getElementById("output").textContent="Change detected!";
});
const courseInput=document.getElementById("course");
const form = document.getElementById("myform");
const output=document.getElementById("output");


form.addEventListener("submit",(event)=>{event.preventDefault();//to prevent the autofresh
event.defaultPrevented;

const name=nameInput.value;
const course=courseInput.value;
console.log(name,course);
output.textContent=name+""+course;
});