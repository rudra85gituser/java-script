//1
//events
// eg = if we click button then something prints on screen
//the change in the state of an object =vent
//changes on going actions
//events are fired to notify codfe of "intreasting changes" that nmay effect thet may effect the affect code execution
//mouse event== click double click
//keyboard=keypress,keyupp
//form events submit

//2
// eg  handeling event in js
//inline handeling has less priority then js event handeling
// we can run one event at a time--- onclick event can run for all button ,we dont have to make another onclick event for other button
let btn1=document.querySelector("#btn1");
btn1.onclick=()=>
{
    console.log("clicked button 2");
    
    let a=25;
    a++
    console.log(a);
};
//eg2
let div=document.querySelector("#div2");
div.onmouseover=()=>
{
    console.log("you are inside div 2");
    
};


//3
//all event handelers ahs access to the event object prop nad method
//node.event=(e)=>{handle event}
let btn2=document.querySelector("#btn2");
btn2.onclick=(e)=>
{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
};

//4
//event listeners is more effecient way of creating a event
//Node.addEventListeners(event,callback)
//Node.removeEventListeners(event,callback)
// claback is the event handeler
//we can do multiple work on same events
let btn3=document.querySelector("#btn3");

btn3.addEventListener("click",()=>{
    console.log("clicked button 3--handeler 1")});

    btn3.addEventListener("click",()=>{
        console.log("clicked button 3--handeler 2")});

        const handeler3=()=>{
            console.log("clicked button 3--handeler 3")};

            btn3.addEventListener("click",()=>{
                console.log("clicked button 3--handeler 4")});

// to remove button
btn3.removeEventListeners("click",handeler3)


let btn4=document.querySelector("#btn4");
btn4.addEventListener("click",()=>{
console.log("clicked button 4")});
