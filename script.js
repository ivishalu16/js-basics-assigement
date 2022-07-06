// problem 1

 var number = prompt("Please enter a number");
var fact =1;
if(number ==0){
    console.log(`The factorialof ${number}  is 1`);
}else if (number<0){
  console.log(`The factorial of -ive numbers is not possible`);
}else{
  for(var i=1;i<=number;i++){
    fact = fact * i;
  }
  console.log(`The factorial of${number} is ${fact}`);
}
// problem 2

var n=parseInt(prompt("Enter  Number:"));
var cube;
var cube=n*n*n;
console.log("cube of number=" +cube);

// problem  3

var e =parseInt(prompt("please enter a  number"));
var temp=(1.732*e*e)/4;
console.log("Area of triangle="+temp.toFixed(2));

//problem 4 

var m =parseInt(prompt("Enter month number"));
if(m == 1 ||m == 3 || m == 5 || m== 7 ||m  == 8 || m == 10 || m == 12) {
  console.log(" No of  days = 31");
}
else if  (m == 4 || m == 6 || m == 9 || m == 11) {
  console.log(" No of days = 30");
}
else if (m == 2) {
  console.log("No of days = 28");
}
else{
  console.log("Error");
}
console.log(" Month no is  "  +m);


// problem 5


var d =prompt("Enter  temprature in celsius");
  var f= (d*1.8)+32;
    console.log( "Temprature in faherneheit = "+f. toFixed(2));

//problem 6

var sum=0,n;
n =parseInt(prompt("Enter any number"));
while(n>=1)
  {
    sum=sum+n;
    n=n-1;
  }

console.log("sum of number  = " + sum);

//problem 7

 var n=parseInt(prompt("Enter a value of n"));
  
if(n<0)
    console.log("Error")

else 
    console.log("value of n =" + n*n);

//problem 8
let s =  prompt("Enter value ");

 var num =0;
for(i=0;i<s.length;i++){
  if(s[i]!="")
    num++;
  
    
}
console.log("No of words =" + num );


//problem 9

var a = prompt("Enter value of a");
var b = prompt("Enter value of b");
var c = prompt("Enter value of c");
 var root_part =Math.sqrt(b*b-4*a*c);
 var denom = 2*a;

var root1 = (-b+root_part)/denom;
var root2 =(-b-root_part)/denom;

console.log("1st root = " + root1.toFixed(2));
console.log("2nd root = "+root2.toFixed(2));

// problem 13 

var num = prompt("Enter an array");
var originalNum = num;
var reverse =0;

while(num !=0){
  reverse =(reverse*10)+(num%10);
  num = parseInt(num/10);
}
if(originalNum == reverse){
  console.log(reverse+ "Plindrome Number");
}
else{
  console.log(reverse+ "Not a Plindrome Number");
}





  








                  
                  
                 


            
                          

                         

              


