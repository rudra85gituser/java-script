//1
//conclusin at end---
//async await >> promice chains >> callback hell

//synchronous execute instruction in sequence''f

console.log("one");
console.log("two");
console.log("three");
console.log("four");

//api is a system in which we give some request and in return we get some data eg weather api
//now there can be delay in receiving data from api as in api data is getting searched from dataabase
//so other parts of code gets get delayaed so we execute instruction of cose simultaneously,asynchronous js
// if many instructions are running simultaneously and there is a code api then the api code will run paralllaly with instruction/code
//eg
function hello(){
    
console.log("hello");
}
//settTimeou=we can set time to run a peice of code
setTimeout(hello,2000);//2000 milisecond =2 second

//eg
setTimeout(()=>{
    console.log("hiii");  
},2000);

//eg
console.log("1");
console.log("2");

setTimeout(()=>{
    console.log("yoo");  
},2500);
// hii will take 3 sec to print ,but next 2 statement will not wait hii to execute
console.log("3");
console.log("4");

//2
//call back 
//whenever we a function inside a function
function sum(a,b)
{
    console.log(a+b);
}
function calculator(a,b,sumCallback)
{
    sumCallback(a,b);
}
calculator(1,2,sum);

//3
//callback hell - nested callbacks stacked below one another  pyramid structure.(pyramid of doon)
//now if we want data after individual delay 
function getdata(dataId,getNextData)
{
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
        getNextData();}
    },3000);
}
//call back hell
getdata(1,()=>{
    console.log("getting data2 .....");
    getdata(2,()=>{
        console.log("getting data3 .....");
        getdata(3,()=>{
            console.log("getting data4 .....");
            getdata(4);
        });
    });
});

//4
//in order to solve/improve callback hell promices are used
//unfulfilled , reject, resolve
//the work which is executing is going to be resolve or reject
//three stages in promices--pending,fulfilled,rejected
//let promices=new Promise((resolve,reject)=>{....}))
//eg
let promise= new Promise((resolve,reject)=>{
    console.log("i am a promice");
    resolve("success");
    reject("there is error");
});
//eg
let promise1= new Promise((resolve,reject)=>{
    console.log("i am a promice 1");
    
    reject("there is error");
});
//eg now we are sending data --then it is successful
function getdata1(dataId,getNextData)
{ 
  return  new Promise((resolve,reject)=>
  {
    setTimeout(()=>
    {
        console.log("data",dataId);
        resolve("success");
        if(getNextData)
        {
        getNextData();
        }
    },3500);
});
}
//eg now we are sending data --and it is unsuccessful
function getdata2(dataId,getNextData)
{ 
  return  new Promise((resolve,reject)=>
  {
    setTimeout(()=>
    {
        console.log("data",dataId);
        reject("error");
        if(getNextData)
        {
        getNextData();
        }
    },4000);
});
}

//5
//now if a promise is conpleted or rejected then we have to do some work
//if fulfilled -- promice.then((res)=>{})
//if rejected -- promice.then((err)=>{})

//if fulfilled
const getpromise=()=>
{
    return new Promise((resolve,reject)=>
{
    console.log("i am a promise")
    resolve("successful");
});
};
let promise3=getpromise();

promise.then((res)=>{
    console.log("promise successful",res);
});

//eg if error
const getpromise1=()=>
{
    return new Promise((resolve,reject)=>
{
    reject("error");
});
};
let promise4=getpromise1();

promise.catch((err)=>{
    console.log("rejected",err);
});


//6 
//promises chain
function asyfun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("successful");
        },5000);
    });
}
function asyfun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("successful");
        },5000);
    });
}
console.log("fetching data1...");
let p1= asyfun1();
p1.then((res)=>{
    
    console.log("fetching data2...");
let p2= asyfun1();
p1.then((res)=>{
    
});
});


//6
//async-await
// whenever a function is returning promice and we have to set timer on promise then await is used
 