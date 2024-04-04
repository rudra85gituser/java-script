//1
//loops are used to repeat a process again and again
//for, while, dowhile

//eg1 print only one time
console.log("this will not repeat");
//repetation of process
for(let i=1;i<=5;i++)
{
  console.log("this will repeat");
}
//eg2 cal sun 1 to 5
let sum=0;
for(let i=1;i<=5;i++)
{
  sum = sum +i;
}
console.log(sum);

//2
// if we use let keyword it limited only inside the scope 
//but instead of let we can use var keyword which is global defined
//eg
for(let i=1;i<=5;i++)
{
  console.log("i=",i);
}
//this willn ot print as i is outside the scope
//console.log("i=",i);
//but
for(var j=1;j<=5;j++)
{
  console.log("j=",j);
}
//this willn ot print as i is outside the scope
console.log("j=",j);


//3
//while loop
let i=0;
while(i<=5){
  console.log("i=",i);
  i++;
}

//4
//do while loop
let q=1;
do{
  console.log("theek");
  q++;
}
while(q<=5);

//5
//for of loop,used to iterate some special data types
//main used to iterate arrey and strings
//initialization,updation and condition is done autometically
//eg
//to count number of char and to count size of string
let size=0;
let str = "apna college";
for(let p of str){
  console.log("p=",p);
  size++;
}
console.log("size of string is",size);

//6
//for in loops
//by using for in loops ,iterator gets access to keys of objects
//this type of for loops is used for iterating keys and value inside objects
//it is mainly used to return keys of an object
let student={
  name:"rahul kumar",
  age:94,
  cgpa: 39.9,
  ispass: true
};
for (let key in student)
{
  console.log("key=",key,"and","value=",student[key]);
}

//7 strings
//sequence of character
//to define string
let str1 ="rudra";
let str2 ='rudra';
//properties of strings,inbuild functions/methods
console.log(str1.length);
console.log(str1[0]);
//str acts as keys and its length acts as its value

//8 
//in java script we can create template literals
//template literals is a type of special string
let specialstring=`this is a special string`;
console.log(specialstring);
console.log(typeof specialstring);

//use of template literal
let obj={
  item: "apple",
  price: 10
};
//normal way to print output
console.log("the price of items",obj.item,"is",obj.price,"rupess");
//template literal use,to print answer in easy way
console.log(`the price of  ${obj.item} is ${obj.price} rupees`);

//string interpolation
//to create string by doing substuation of place holders
//`string text${expression}string text`

//escape character
console.log("rudra \n yadav")
console.log("rudra \t yadav")

//9 
//build in method to manipualate string
//eg str.toUpperCase
//str.toLpperCase
//there is no change in original string 
//these methods alyays return a new value
let str3=`this is a special string`;
let str4=str3.toUpperCase();
console.log(str3);
console.log(str4);
//str.trim() uesd to removes spaces 
//str.slice(start,end?) index starts from 0
//str.concat(str2)
//str.replace(searchval,newval)
let str5="i love you";
str5=str.replace("love","fuck");
console.log(str5);
//str.charAt(idx)
