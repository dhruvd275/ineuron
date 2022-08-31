//Write a program to find the factorial of a number.
let n = 5;
let answer = 1;

if(n == 0)
{
    console.log("1");
}
else{
for(var i = n; i >= 1; i--){
    answer = answer * i;
}
console.log(answer);
}