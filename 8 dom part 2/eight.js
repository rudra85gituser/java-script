//dom manipulation==attribute,style
//getAttribute(attr)-- to get the attribute value
//setAttribute(attr)-- to set the attribute value
//node.style

//1
let div=document.querySelector("div");
console.log(div);
console.dir(div);

let id=div.getAttribute("id");
console.log(id);//to get the name of the attribute
console.dir(id);

let name = div.getAttribute("name");
console.log(name);//to get the name of the attribute
console.dir(name);

let para=document.querySelector("p");
let paraa=para.getAttribute("para");
console.log(paraa);//to get attribute value
console.dir(div);

//2
// to set the value of atribute
let para1=document.querySelector("p");
let paraa1=para1.setAttribute("para","newpara");
console.log(paraa);//to get attribute value
console.dir(div);

//3 to change the style value
let div1=document.querySelector("div");
console.log(div1);
console.dir(div1.style.backgroundColor="green");

//4 
// till now we have studied that how to access elements of html in js and how to do changes on that elements
//now to study how to create new elements in js file without accessing html file
//to create new element is a two step process

//eg to create new button
let newbut=document.createElement("button");
newbut.innerText=("click me!!!");
console.log(newbut);// now button has ben created 
// to displat/add button on screen
let div2=document.querySelector("div");
div2.append(newbut);


//eg to create new heading
let newhead=document.createElement("h1");
newhead.innerHTML=("<i> I am new!!</i>");
console.log(newhead);// new heading has ben created
// to displat/add heading on screen
let head2=document.querySelector("body");
head2.append(newhead);


// to displat/add button on screen
// to display a button in dive we have to insert at the end of the div section


//node.append(el)--adds at the end of the node
//node.prepend(el)--adds at the start of the node
// to show button at starting
//node.before(el)--adds before the node
//node.after(el)--adds after the node

// to delete node
let h2=document.querySelector("h2");
h2.remove();

// study append child and remove child