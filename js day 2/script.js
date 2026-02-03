//map method 
let arr = [1,2,3,4,5]

let result = arr.map((x)=> x)
console.log(result);

//filter method
let scores = [12,7,22,15,32,6,4,27,11,16]
let highScores = scores.filter((score)=> {
    if(score>=15){
        console.log(score,"passed")
    }
    else{
        console.log(score,"failed")
    }
});

//reduce method
let marks = [1,2,3,4,5]
for (let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
// reduce method:takes two parameter
let numbers=[6,1,2,3,4,5];
// let sum=0;
// for(let i=0; i<numbers.length;i++){
//     sum=sum+numbers[i]
// }
let sum= numbers.reduce((acc, current)=> console.log(current));
// acc=1,index:0
// current:rest of the elements apart from index:0
