//1
//benifits of making individual file of css , js and html === 1 readibility,2 modularity(devides the file in different blocks of code),3 brouser catching)

//2
console.log("alert!");
alert("click to continue!")
//website->inspect-> then we can see html code in elements and js code in console and css code code in style
//the changes done in console,elements and style are temperory

//3
//when ever we open a tab there is a object which is always present,this object is consists of many functions such as alert
//the window object represents an open window in a brouser,it is a brouser object(not js object)it is automaticslly created by brouser
//it is a globel object with lots of properties/functions

//as we know that window is a inbuild object
window.console.log("alert!!!!!!!");

//4
//dom----when a webpage is loaded the brouser creates a document object model
//we can access all html tags,data in js file 
//all html data gets stored under a document  object in js
//we can access all html data through document object in js file

//we can write window.document in console to see all html code

//to see properties if document we can write 
//console.dir(window.document)

// console.log is diff from console.dir(window.document) as  console.log  is used to print a statement and console.dir(window.document) is used to print the properties of objects and methods

//we always use console.dir(window.document) to see the properties of object

//webpage->console->window object->document object->model/representation of html data

// to access html in java script
console.dir(window.document);
//or
console.dir(document);
// to access body of html
console.dir(window.document.body)
//or
console.dir(document.body)
// body object consists of many nodes
console.dir(document.body.childNodes[1])

//5
//now what is the use of these object and what is the pourpose of accessing html file in js file
//when we write a code in html file it is fixed and we cannot access that code directely 
//if we want to do changes dynamically then we use html file in js
//dynamic changes in html file using java script

console.dir(window.document.body.style.background="violet");
console.dir(document.body.childNodes[3].innerText="abflksf");

//without effecting the html file we are doing dynamic changes in ou webpage


//6
//now if we write the script tag in head file in html code then we can not access the body pary of the html code as head is executed and then js file is executed and then body executes
//script tag in html to link js file does not able to access the objects of body tags

//7
//DOM manipulation

// 1 selecting with id-- document.getElementById("myld")
//we can give id to all elements of html
//id is always represented by # symbol
//eg #heading2 is the id in html file

let heading2=window.document.getElementById("heading2");
console.log(heading2);

// 2 selecting with class
//documnets.getElementsBy ClassName("my class");
//when we have to do same changes on different element then we select different elements and make a soingle category
//calss can be same for different elements
//. symbol is used to represent class which can access different elements on which we have to same changes
//it returns acollection of html elements
let changesclass=document.getElementsByClassName("class1");
console.dir(changesclass);
console.log(changesclass);

//3 selecting with tag
//document.getElementsBy TagName("p");
//with the help of tag name we can access the elements of a html file
let para=document.getElementsByTagName("p");
console.dir(para);
console.log(para);

// 4 query selector
//in query selector we can pass all  the class , tag, id
//document.querySelector("id/class/tag") - returns first element
////document.querySelectorAll("id/class/tag") - returns node list

//eg single element
let selectingfirstelement=document.querySelector("p")
console.dir(selectingfirstelement);
console.log(selectingfirstelement);
//eg all elements
let selectingallelement=document.querySelectorAll("p")
console.dir(selectingallelement);
console.log(selectingallelement);
//eg
let selectingid=document.querySelectorAll("#myId")
console.dir(selectingid);
console.log(selectingid);


//8  dom manuoulation properties
//we can get set and change the properties of html elements in js file

//a tag name: return tags for element nodes
//eg para.tagNmae,selectingid.tagName on console
let firstprop=document.querySelector("#myId");
console.dir(firstprop);

//b innerText: returns the text content of the elements and its children 
//tree structure is used and with the help of this property we can access the data inside the node
//whenever dom tree is created there are three nodes are created----1>text nodes, 2>comments nodes, 3>elements nodes 
//we basically works on elements node

console.dir(document.body.firstChild);

let secondprop=document.querySelector("body");
console.dir(secondprop);
let secondprop1=document.querySelector("body").children;
console.dir(secondprop1);


//c inner html return the plain text or html contents in the elements
// the difference between innertext and innerhtml is that innertext gives the data of what inside the tag and innerhtml gives the data with tag
let thirdprop=document.querySelector("div").innerHTML;
console.dir(thirdprop);

let thirdprop1=document.querySelector("div").innerText;
console.dir(thirdprop1);

//d textContent: returns textual content evden for hidden elements

let fourprop=document.querySelector("h2").innerText;
console.dir(fourprop);

fourprop1=document.querySelector("h2").textContent;
console.dir(fourprop1);