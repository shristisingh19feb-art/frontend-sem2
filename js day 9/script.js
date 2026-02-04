// querySelector

const query= document.querySelector("#content p");
console.log(query,"query");
query.textContent="fdbf gghyfe ghnbf"

// querySelectorAll
const query2 = document.querySelectorAll("p");
console.log(query2, "query");
for(let i=0; i<query2.length; i++){
    query2[i].textContent="asdjhf vhdjuherf sjfuhdbvshj"
}

const ptag = document.getElementsByTagName("p");
console.log(ptag);

for (let i = 0; i < ptag.length; i++) {
    ptag[i].textContent = "hello my name is piyush";
    if (i % 2 === 0) {
        ptag[i].style.color = "blue";
    } else {
        ptag[i].style.color = "green";
    }
}
ptag[ptag.length - 1].style.fontWeight = "bold";

const para = document.getElementsByTagName("p");
for (let i=0; i<para.length; i++){
    if (i%2===0){
        para[i].style.color="blue";
        
    } else {
        para[i].style.color="green";
        
    }
    para[i].style.fontSize="20px"
    para[i].style.fontWeight="bold"
}