//0
////alert is used to give popup
alert("hello!");//one time popup

//prompt is also used to give popup
//but it also give some space to store data/info
//the input which is taken by prompt can be saved inside a variable
let tostore=prompt("hiiii");
console.log(tostore);

//1
//comments are non-executable part of code
//single line =//
//multi line=/* */

//2
//operators=to perform some operation on data
//arithemetic +,-,,*,/
let a=5;
let b=2;
console.log("a =", a ,"& b =",b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
//modulus/remainder = %symbol
console.log("a%b=",a%b);
//exponential operator =power
console.log("a**b=",a**b);

//3
//increment and decrement operator
//post increment/decrement  a++,a--
//pre increment/decrement   --a,++a

//4
//assignment operator
//equal to
//a + = 4/ a=a+4
//a - = 4/ a=a-4
//a * = 4/ a=a*4
//a / = 4/ a=a/4
//a ** = 4/ a=a**4

//5
//comparison operator
//equal to ==,not equal to !=
// always gives answer in true and false
let p=3;
let q=6;
console.log("p==q",p==q);
console.log("p!=q",p!=q);

//now if we compare number 5 with string 5 and we use normal comparison operator then it will work
//as js converts string to number and then compare
let pp=3;
let qq="6";
console.log("p==q",p==q);//false
console.log("p!=q",p!=q);//true

//if we dont want compare the number with string then we use stricter version of = and!=
// equal to and type ===, not equal  to and type !==
let ppp=6;
let qqq="6";
console.log("p===q",p===q);//false
console.log("p!==q",p!==q);//true

//<,>,<=,>=
console.log("p<q",p<q);
console.log("p>q",p>q);
console.log("p<=q",p<=q);
console.log("p>=q",p>=q);

//6
//logical operator
let aa=6;
let bb=55;
console.log("condition1 || condition2",aa<bb||aa===6);//logical or
console.log("condition1 && condition2",aa<bb&&aa===6);//logical and
console.log("condition1 ! condition2",!aa===6);//logical not

//7
//conditional statement
let mode="dark";
let color;

//if statement
if(mode==="dark") { color="black";}
if(mode==="light") {color="white";}
console.log(color);

//else statement
if(mode==="dark") {color="black";}
else {color="white";}
console.log(color);

//else if statement
if(mode==="dark") {color="black";}
else if(mode==="pink") {color="pink";}
else {color="white";}
console.log(color);

//8
//ternary operator
//condition?true output:false output
let age=12;
let result=age>18?"adult":"not adult";
console.log(result);
console.log(age>18?"adult":"not adult");

//MDN web docs, is a documentation by developers in which we can collect info about css,js,html

//9
//switch statement
/*switch (expression) {
    case caseExpression1:
        statements
      case caseExpression2:
        statements
      // …
      case caseExpressionN:
        statements
      default:
        statements
    }*/

    