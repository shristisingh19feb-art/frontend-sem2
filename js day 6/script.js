//
let sentence = " I am a comma separated sentence ";
console.log(sentence.length);
let words = sentence.split("a");
console.log(words);

// count the occurrence of "r" in the given string 
let str="tu meri me tera tu meri"
let sentence1=str.split("r");
console.log(sentence1);


// types of functions//
// first class function//
function test(){
    console.log("test")
    return function test2(){
        console.log("test2")
        return function test3(){
            console.log("test3")
        }
    }
}
// test()()()//function currying 
let value=test()
let value2=value();
value2()
//test me ek parameter lia too ek argument bhi lena padega 
//value 2 yaha test 3 ko call kr rha h 



//self invoking function
function demo(){
      console.log("demo")
}

let a=10;
console.log(a)
function sample2(){
    demo()
}
sample2()