// console.log("Hello World");
// var a=5;
// var a=10;
// console.log(a)
// let b=20;
// console.log(b)
// const c=30;
// console.log(c)
// console.log(c);
// var s = 10;
// var str = "VAMSI"; // ''//``
// var bool = true;
// var un;
// var nu = null;
// console.log(s);
// console.log(str);
// console.log(bool);
// console.log(un);
// console.log(nu);
// var big = 1234567780n;
// var symbol = Symbol("li");
// console.log(typeof str);
// console.log(typeof s);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);
//Arthmetic operator(+,-,*,/,%)
// var a=10;
// var b=20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// //Relational operator(<,>,<=,>=,!=,==,===,!==)
// var a=10;
// var b=20;
// console.log(a>b);//false
// console.log(a<b);//true
// console.log(a>=b);//false
// console.log(a<=b)//true
// a=10;
// b="10";
// console.log(a==b)//true
// console.log(a!=b);//false
// console.log(a===b);//false
// console.log(a!==b);//true
// Logical operator(&&,||,|)
// console.log(a&&b);
// console.log(a||b);
// console.log(a|b);

//   ARRAY
// var arr = [10,20,30,40,50];
// console.log(arr);
// console.log(typeof arr);
// var obj = {name :"a",age:20};
// console.log(obj);
// console.log(typeof obj);

// for(let i=0;i<=10;i++){
//     console.log(i);
    
// }
// //while loop
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
    
// }
// //do while loop
// i = 1;
// do{
//     console.log('do..while');

    
// }while(i===0);
// find even number
// for(let i=1;i<=0;i++){
//     if(i%2===0){
//         console.log(i);
// }
// }
// i=9;
// if(i%2===0) console.log("even");
// else console.log("odd")

// let m  = 90;
// if (m>=90) console.log("o grade");
// else if(m>=75) console.log("A grade");
// else if(m>=70) console.log("B grade");
// else console.log("Fail");
// let day = 6;
// switch(day){
//     case 1: {
//         console.log("sunday");
//         break;
//     }

//     case 2: {
//         console.log("monday");
//         break;
//     }
//     case 3: {
//         console.log("tuesday");
//         break;
//     }
//     case 4: {
//         console.log("wednesday");
//         break;
//     }

//     case 5: {
//         console.log("thursday");
//         break;
//     }
//     case 6:{

//      console.log("friday");
//      break;
//     }
//     case 7: {console.log("saturday");
//          break;
//     }
//     default : {
//         console.log("invalid");
//         break;
//     }
    

    
// }
// Ternanry operator 
// i = 7;
// let res = (i%2==0)?"even":"odd";
// marks = 90;
// let gra = (marks>=90)?"o grade":"A grade";
// console.log(res);
// console.log(gra);
// function add(){
//     console.log(10+40);
    
// }
// add();  
// ARROW FUNCTION
// var add = (a,b)=>{
//     console.log(a+b);
    
// }
// add();
// add(10,20);
// var c;
// function add(a,b){;
//     c =10
//     console.log(a+b+c);
    
// }
// add(10,20)
// Hosting
// var z;
// console.log(z);
// Spread operator
// var arr1 = [10,20,30];
// var arr2 = [...arr1,40,50,60];//3 dots are called spread operator
// console.log(arr2);

// Destructuring Operator
// var[m1,m2,m3,m4,m5]=[89,90,99,96,87]
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

// var {name,age,dept}= {
//     name:'lavanya',
//     age:20,
//     dept:['csd','ece'],
//     marks : {
//         mern:90,
//         java:89,
//         c:80
//     }
//   }
//   console.log(name);
//   console.log(age);
//   console.log(dept);
//   console.log(marks);

// let arr = [10,20,30,40];
// for(variable variable_name in array_name){
// statement
//  }
// for(let i in arr){
//     console.log(i,arr[i]);
// }

// var obj ={
//     name:"vikram",
//     age:25
// }
// for(let i in obj){
//     console.log(i);
// }
// for.of
// for(variable variable_name of array_name){
// statement
// }
// for(let val of arr){
//     console.log(val);
// }

// let arr=[1,2,3,4];
// map
// var double_arr=arr.map((i)=>(i*2));
// console.log(double_arr);

// filter
// var even = arr.filter((i)=>(i%2===0))
// console.log(even);

// radius
// var total=arr.reduce((sum,i)=>(sum+i),0);
// console.log(total);

// var total_sum=arr.map((num)=>num*2).filter((num)=>(num%2===0)).reduce((sum,num)=>(sum+num),0)
// console.log(total_sum);
//prime
// var n=8;
// var flag=true;
// if(n<=1)flag=false;
// else{
//     for(let i=2;i<n/2;i++)
//         if(n%i===0){
//             flag=false;
//             break;
//         }
// }
// console.log(flag?"prime":"not prime");

// var name="lavanya";
// console.log(`My name is ${name}`);

// let arr = [10, 20, 30, 40];

// arr.forEach((value, index) => {
//     console.log(index, value);
// });


// var add=(a,b,callback)=>{
//     var result=a+b;
//     callback(result);
// }
// add(10,20,(res)=>{console.log(res)})
// var main=(callback)=>{
//     console.log("I am main");
//     callback()
    
// }
// var demo =()=>{
// //     console.log("I am Call back");
    
// // }
// // main(demo)
// var  demo = ()=>{
//     console.log("I am callback");
    
// }
// var main = (myFunction)=>{
//     myFunction()
// }
// main(demo);
// PROMISE

var promise = new Promise((resolve, reject) => {
    var success = true;

    if (success) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }
});

promise
    .then((result) => console.log(result))
    .catch((err) => console.log(err));


function getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}

function getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}

function getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}

const getData=async ()=>{
  var res= await fetch("https://jsonplaceholder.typicode.com/posts")
 var data=await res.json();
}

const getData=async ()=>{
    try{
        var res= await fetch("https://jsonplaceholder.typicode.com/posts")
        var data=await res.json();
        console.log(data);
}catch(err){
    console.log(err);
}
}