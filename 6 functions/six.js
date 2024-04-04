//1
//block of code that performs a specific task,that can be invoked whenever needed
//function definition
/* function functionname(parameters)
{
  do some task/operation
}
*/
//function call=functionname();
function myfunction()
{
  console.log("my name is khan");
  console.log("my name is rudra");
}
myfunction();
//if a peice of code is repeating or any task is getting repeated then we can make functions
//function prevent redundency-repeatition
function function1(msg)
{
  console.log(msg);
}
function1("java script");
//giving value in function definition-parameter
//giving value in function call-argument


//2
//function to cal sum of two number
//non returnable
function sum(x,y)
{
  console.log("sum=",x+y);
  
}
sum(4,5);
//returnable
function sum1(x,y)
{
  return x+y; 
}
console.log("sum=",sum1(4,5));
//we can return on ly one value at a time
//we can not write code after return
//x and y are local variables
//they are alive/valid inside block /functions


//3
//arrow functions is a compact way of writing functions
//recreating sum function using arrow functions
//these functions are stored inside a variable
//here arrowsum is a variable

const arrowsum=(x,y) => {
  console.log("sum=",x+y);
}
const multiply=(x,y) =>
{
  console.log("multiply=",x*y);
}
//output on console
/*
arrowsum
(x,y) => {
  console.log("sum=",x+y);
}
arrowsum(3,4)
sum= 7
undefined
*/

//non parmeterized arrow function 
const text=()=>
{
  console.log("script java");
}

//4  ques
// to count the nummber vovels in string
function countvov(str)
{
  let count =0;
  for(const char of str)
  {
    if(char==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u")
    {
      count++;
    }
  }
  console.log("number of vovels =",count);
}
//ques
// to count the nummber vovels in string using arrow function
const charcount=(str)=>
{
  let count =0;
  for(const char of str)
  {
    if(char==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u")
    {
      count++;
    }
  }
  console.log("number of vovels =",count);
}


//5
//there is function and method
//function is a block which performs some task
//a function associated with some object or data structure is called method
//eg .touppercase() is a function when it is attached with a string it becomes a method
//eg forEach(call back functionn)is a function when it is attached with a array it becomes a method


//6
//forEach is a method
//arr.forEach(call back function)
//call back function----it is a function to execute for each element of an arrey
//a callback function is a function passed as an argument to another function
/*
arr.forEach((val)=>
{
  console.log(val);
})
*/
//a callback is a function passed as an argument to another function
//eg1
//functions can be passed as parameters like normal variables
 function abc()
 {
  console.log("hello");
 }
 function myfunc(abc)
 {
  return abc;
 }
 //eg2
 let arr=[1,2,3,4,5];
 arr.forEach(function printVal(val)//val is used to access value at each index
 {
  console.log(val);
 });
 //eg3
 let arr2=[1,2,3,4,5];
 arr.forEach((val)=>//val is used to access value at each index
 {
  console.log(val);
 });
 //for each is used when we have to access each element of a arrey

 //we can pass 3 parameters in forEach method
 //1 value =for items of arrey
 //2 index= position of elements
 //3 array=array itself
 //eg4
 let arr3=["rudra","pratap","singh","yadav"];
 arr3.forEach((val,idx,arr)=>{
  console.log(val.toUpperCase(),idx,arr);
 });

//higher order functions/methods===forEach function is higher order functions/methods
//higher order functions/method is a function which takes other function as parameter and return some function as a value


//7
//ques
let nums=[2,3,4,1,6,5];
nums.forEach((val)=>{
console.log("square of ",val,"=",val*val)
}
);

//another way to write call back function
let nums1=[2,3,4,1,6,5];
let calsquare=(val)=>{
  console.log("square of ",val,"=",val*val);
};
nums.forEach(calsquare);

//8
//important array methods
 //map method is similar to forEach method the only difference is that it creates a new arrey with the results of some operation
 //the value its callback returns are used to form new arrey
 //arr.map(call back func(value,index,arrey))
 let num4=[1,2,,7,9,4,7];
 num4.map((val)=>
 {
   console.log(val);
   
 });
 //we can store value of array to new array using map functions
 let num5=[1,2,5];
 let newarr = num5.map((val)=>
 {
   return val;
   
 });
 console.log(newarr);

 //forEach is used when we have to perform some operation
 //map is used to do some operation and to store values in new arrey

 //9
 //filter method creates a new arrey and give values for a condition / filter
 let num6=[1,2,3,4,5,6,7,8];
 let arr4=arr.filter((val)=>
 {
   return val %2 === 0;
 });
 console.log(arr4);


 //10
 //reduce method = performs some operation and reduces the array to a single value
 //it returns single value
 //res= result,accumulator
 //curr= current value
 //eg to find the sum of array
 let arr5=[2,43,5,67,4];
 const output=arr.reduce((res,curr)=>
 {
return res+curr;
 });
console.log("output=",output);
//eg to find the maximum number
let arr6=[2,3,5,6,4];
 const output1=arr.reduce((res,curr)=>
 {
return res>curr ? prev:curr;
 });
console.log("output=",output1);