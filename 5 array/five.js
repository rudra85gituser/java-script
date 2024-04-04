//1
// array is a collection data of same datatype
//linear way to store elements
let arr=[2,44,5,4,334];
console.log(arr);
//length function,property of array
console.log(arr.length);
//type of arrey is object, where keys are the index number and values are the elements of arrey
console.log(typeof arr);
//array index, we can access elements of arrey by index number
console.log(arr[0]);
//string are imutable but array are mutable/can be edited
arr[0]=99;
console.log(arr);
//for loops
for (let index=0;index<arr.length;index++)
{
  console.log(arr[index]);
}
//for of loop
for(let ele of arr)
{
  console.log(ele);
}
//ques
let items=[12,23,34,45,56,67];
let idx=0;
for(let val of items){
  console.log(`value at index ${idx}=${val}`);
   let offer =val/10;
   items[idx]=items-offer;
   console.log(`value after offer=${items[idx]}`);
  idx++;
}

//arrays methods
//mejority of the data is stored in array of various websites
//Push(): add to end
let data=[12,23,34,45,56,67,78,89];
console.log(data);
data.push(11);
console.log(data);
//Pop(): to delete from end
let data1=[12,23,34,45,56,67];
console.log(data1);
let deleteditem=data1.pop();
console.log(data1);
console.log("deleted item",deleteditem);
//toString(): converts arrey to strings
let data3=[12,23,34,45,56,67,100,199,188,177];
console.log(data3);
console.log(data3.toString());
console.log(data3);
//Concat(): joins multiple array and returns result
let data4=[21,43,54,65,76,87];
let data5=[12,34,56,78];
let final=data4.concat(data5);
console.log(final);
//unshift():add to start
data4.unshift(56);
console.log(data);
//shift(): delete from start and return
let int =data4.shift();
console.log("deleted",int);
//slice():returns a peice of arrey
//slice(star index,end index)
let data6=[12,23,34,45,56,67,78,89];
console.log(data6);
console.log(data6.slice(1,4));
//splice();change in original arrey(add ,remove and replace)
//splice(star index,delete count,new element)
let data7=[12,23,34,45,56,67,78,89];
console.log(data7);
data7.splice(2,2,0,1223);
/*
add element---data7.splice(3,0,1332);
delete element---data7.splice(3,1);
replace element---data7.splice(3,1,101);
*/
console.log(data7);


