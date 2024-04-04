//ques1 print all even number 1 to 100
for(let num=1;num<=100;num++)
{
if(num%2==0)
{
  console.log("even =",num);
}
else{
  console.log("odd =",num);
}
}

//ques2 create a game where we start with a random number and ask user to guess a number ,ask till user gives the correct number
let gamenum=25;//take random number of your choice
let usernum=prompt("guess the game number");
console.log(usernum);