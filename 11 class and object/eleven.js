//1 
//class and object
// review boject== a js object is an entity that have some state and behaviour(properties and method)
//js object has special proper ty called protptype
// there are diff ways of creating objects in class
const student={
   fullname: "rudra yadav",
   cgpa:7,
   printmarks: function ()
   {
    console.log("cgpa=",this.cgpa);//here this.marks==student.marks
   }
};

//2
//this keyword refers to an object that is executing current peice of code
//this keywors batata hai ki current object ka kon sa keyword use krrr rhee hai

//3
//when ever we create object a prototype property gets created, this prototype consists of many inbuild objects
//js-> object-> protytype-> inbuild objects
//prototype consists of properties and methods

//4
//eg arrey is a type of object
let arr=[1,3,2,4,5,6,7,8];
//now we can see different inbuild functions in prototype
//prototype consists of inbuild functions and methods which we can inherit while making object
// we can make our own prototype also
//eg
const emp={
caltax()// second way of creating function in objects
    {
        console.log("tax rate is 10%");
    },
};

const karan={
    salary:5000,
};
karan.__proto__=emp;// now we can acces the function emp in the prototype section of karan function

// if we make diff objects and we want emp oject property inside diff object ,then prototyp used

const karan1={
    salary:4000,
};
karan1.__proto__=emp;

const karan2={
    salary:2000,
};
karan2.__proto__=emp;

const karan3={
    salary:8000,
};
karan3.__proto__=emp;
//now we can access emp function and variables   in diff objects


// now  we create same function as protype in other object then object function will execute and prototype function will not execute
//eg 
const karan4={
    salary:1000,
    caltax()// second way of creating function in objects
    {
        console.log("tax rate is 50%");
    },
};
karan4.__proto__=emp;

//5 classes in js
//whenever we have to create diff objects having same propeties then we create classes
//class is a blueprint where objects are models made on those blueprints
//eg
class carfactory{
    start()
    {
        console.log("start");
    }
    stop()
    {
        console.log("stop");
    }
    setbrand(brand)
    {
        this.brandname=brand;//jis object ko call karenge ouss object ka brand print hoga
        console.log(this.brandname);
    }
}//a class having a function whoch can be used by diff objects
let fortuner= new carfactory();
fortuner.setbrand("tayota");
let nano= new carfactory();
nano.setbrand("tata")
//these diff objects can use sane function inside a class

//6
//constructor
//constructor is a special type of method/function
//if we do not create constructor , then it will get automatically created 
//new keyword always finds constructor first in class
//whenever we create object a constructor gets automatically envoked 
class carfactory2{
    constructor(brand,milage) {

        console.log("creating new object");
        this.brand=brand;
        this.milage=milage;
    }
    start()
    {
        console.log("start");
    }
    stop()
    {
        console.log("stop");
    }

}//a class having a function whoch can be used by diff objects
let innova= new carfactory2("tayota",25);
console.log(innova);
let ciaz= new carfactory2("nexa",30);
console.log(ciaz);

//7
//inheritance=some properties and functions of a class can be used by other class
//in order to avoid repeatation we use concept of class and object
//as for diff object we can use same function by defining function ones
//eg
class parent{
constructor (){
    this.species="insaan";
}
    hello()
    {
        console.log("hello");
    }
}
class child extends parent{}

let obj=new child();
//eg
class person{
    eat()
    {
        console.log("eat");
    }
    sleep()
    {
        console.log("sleep");
    }
    work()
    {
        console.log("do nothig");
    } 
}
class engineer extends person{
    work()
    {
        console.log("do hard");
    }
}
// if a parant and child have same function and we call func through child then the same function inside the child will be called
let rudraobj=new engineer();
//the constructor will also work under engineer child class

//8
//super keyword is used to call the constructor of its paa=rant class to access the parents prop and methods 
//eg
    //eg basically we are first calling parent class constructor and with the help of super keyword we are callind child class constructor
    class person2
    {
        constructor()
        {    console.log("enter parent constructor");
            this.species2="insaan";
            console.log(this.species2);
        }
        work()
        {
            console.log("do nothig");
        } 
    }
    class engineer2 extends person2
    {
        constructor(branch)
        {    
            console.log("enter child constructor");
             super();// to envoke parent class constructor
            this.branch=branch;
            console.log(branch);
            console.log("exit child constructor");
        }
        work()
        {
            console.log("do hard");
        }
    }
let engi2=new engineer2("cse");
//eg if we want to pass some argument from child constructor to parent constructor
class person3
    {
        constructor(name)
        {   
            console.log("enter parent constructor");
            this.name=name;
            console.log(name);
        }
    }
    class engineer3 extends person3
    {
        constructor(branch)
        {    
            console.log("enter child constructor");
             super("rudra");// to envoke parent class constructor
            this.branch=branch;
            console.log(branch);
            console.log("exit child constructor");
        }

    }
let engi3=new engineer3("ece");


//eg to call any function from child class 
class person4
    {
        constructor(name)
        {   
            console.log("enter parent constructor");
            this.name=name;
            console.log(name);
        }
        eat()
        {
            console.log("eat");
        }
    }
    class engineer4 extends person4
    {
        constructor(branch)
        {    
            console.log("enter child constructor");
             super("harshit");// to envoke parent class constructor
            this.branch=branch;
            console.log(branch);
            console.log("exit child constructor");
        }
        work()
        {
            super.eat();
            console.log("do something");
        }

    }
let engi4=new engineer4("chemical");

//9
//if there is any error in code and we know that ,so we can use try and catch
let a=5;
let b=4;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
try// if we are not sure then we go inside try block
{
console.log("a+b=",a+c);
}
catch(err)// to handle error we go inside catch block
{
    console.log("error");
}

console.log("a+b=",a+b);

