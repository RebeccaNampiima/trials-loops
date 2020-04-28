//Compute the sum  of an array of integers

let array = [1, 2, 3, 4, 5];
let sum = array. reduce(function(a, b){ //reduce(),adds the current element value to the already computed sum of the previous values.
return a + b;
}, 0);
console. log(sum); 

//Write a JavaScript program that accept two integers and display the smaller

let num1, num2;
num1 = window.prompt("type the First integer", "0");
num2 = window.prompt("typet the second integer", "0");
                                                 
if(parseInt(num1, 10) < parseInt(num2, 10)) // parseInt() function parses a string and returns an integer although i need more explanation.
  { 
  console.log("The smaller of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num1, 10) > parseInt(num2, 10)) 
  {
  console.log("The smaller of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }

 // Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result
  let a = 1; b = 2; c = 3; d = 4; e = 5;
  
  if (a>b && a>c && a>d && a>e)
  {
      console.log(a);
  }
  else if (b>a && b>c && b>d && b>e)
  {
      console.log(b);
  }
  else if (c>a && c>b && c>d && c>e)
  {
      console.log(c);
  }
  else if (d>a && d>b && d>c && d>e)
  {
      console.log(d);
  }
  else
  {
      console.log(e);
  }



/*Compute the sum and product of an array of integers
const array = [1, 2, 3, 4, 5, 6];
let sum = 0;
let product = 1;
let i;
for (i = 0; i < array.length; i += 1)       //i will have to study more about this(line 59 and 60), i didnt do this on my own
   {
    sum += array[i];
    product *= array[i];
    }
console.log(`Sum : ${s} Product :  ${p}`); */

