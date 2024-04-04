//1 variables

fullname="Rudra Yadav";
age=21;
enrollment=312
console.log("fullname");
console.log(fullname);
console.log(age);
console.log(enrollment);

x=null;//no value
y=undefined;//special value
//there is difference between null and undefined

//boolean variable
isstudying=true;//whether the condition is true or not
console.log(isstudying);


//2 js is basically a dynamically typed language
//it means that we can store any type of value in any type of variable
lastname=98;
console.log(lastname);

//3
// = is known as assignment operator

//fullname
//fullName=camel case
//full_name=snake case
//full-name=kabab case 
//FullName=pascal case

//5
//var,let,and const are used to define a variable
//nowdays we will never used var
//we will usually use let and const

//var=variables can be re declared and updated,a global scope variable
//var=variables cannot be re declared and but can updated,a global scope variable
//var=variables cannot  be re declared and updated,a global scope variable

//var is used ,here age variable can be redeclared and updated
var age=21;
console.log(age);
//variable newname can be updated
//variable can be declared and can be initialized later
 let newname= "Rudra Yadav";
 console.log(newname);
//const is used to fix the value od variable
//const has to be initialized ones
 const newenroll="221b312";
 console.log(newenroll);

 //6
 //blocks 
 //using block we can use same variable repeatditily
 
 {
    let a=10;
    console.log(a);
 }
 {
    let a=10000;
    console.log(a);
 }

 //7
 //to find the data type of variable we write "type of (variabl name)" on console
 //jab tak variable ke andar koi value nahi hoti tbb tk vo undefined hata hai
 //types-premitive and non premitive
 //premitive- int,boolean,bigint,null,undefined,symbol
 let q= BigInt("123");
 console.log(q);
 let w=Symbol("klll");
 console.log(w);

 //non-premitive= objects
//objects is a collection of values
//to create object
const student ={
    fulname:"tony stark",
    age:20,
    cgpa:8.2,
    ispass:true,
    num1:23,
    naam:"rudra",
};
//here fullname ,age ,cgpa ispass are=  keys
//nad tony stark,20 ,8.2,true are value of keys
//to access keys and values of student object
console.log(student["age"]);
//or
console.log(student.age);
//now we can change the value od a variable directely in case of primitive data types 
//but in order to change the values of a object we do this
student["num1"]=student["num1"]+8;
console.log(student["num1"]);
student["naam"]="yadav";
console.log(student["naam"]);
//we can see the data type of values of keys
console.log(typeof student["naam"]);

//8
//here object is const but we are able to update the value of variables inside object
//in case of non premetive data types when we create object we are able to edit the values of keys





 
 
 
 

