console.log("helloo");

function myFunction(msg){
console.log(msg);
}

// myFunction("shreyaaaa");

function sum(x,y){
    console.log(x+y);
}

let mul=(a,b) => {
        //console.log(a*b);
        return a*b;
}

// console.log(mul(4,6));
// console.log(mul);

function vowelCount(msg){
    let count=0;
    for(const char of msg){
        if(char == "a" ||char == "e" ||char == "i" ||char == "o" ||char == "u"){
        count++;
    }
    }
     console.log(count);
}
// vowelCount("shreya");

let newCount=(str) => {
     let count=0;
    for(const char of str){
        if(char == "a" ||char == "e" ||char == "i" ||char == "o" ||char == "u"){
        count++;
    }
    }
     console.log(count);
}
//printValue is a callback function 
//forEach is used only for arrays
//It is a Higher order funcion(which takes another function as a paarameter/returns anpther function)

// let arr=[1,2,34,4,5,6];//val is a value at each index
// arr.forEach(function printvalue(val){
//     console.log(val);
// });

// let arr=[1,2,34,4,5,6];//val is a value at each index
// arr.forEach((val,idx,arr) => {
//     console.log(val,idx,arr);
// });


// map() performs some works and creates new array with those results

let nums=[35,87,99,6];
// nums.map((val)=>{
//     console.log(val);
// })

// let newArr=nums.map((val)=>{
// return val;
// })
// console.log(newArr);

//filter 
// filters the arrr ele. based on some condition and forms new array
// let again=nums.filter((val)=>{
//     return val%2==0;
// })
// console.log(again);

//reduce
// const output=nums.reduce((res,curr)=>{
//     return res + curr;
// });
// console.log(output);

// let marks=[65,89,77,67,90,98,46];
// let a=marks.filter((val)=>{
//     return val > 90;
// });
// console.log(a);

let n=prompt("enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

