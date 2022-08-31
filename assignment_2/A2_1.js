// Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

let a = 15;
let b = 14;
let c = 13;

if(a==b && b==c)
{
    console.log("The Triangle is Equilateral.");
}
else if (a==b || a==c || b==c)
{
    console.log("The Triangle is Isosceles.")
}
else 
{
    console.log("The Triangle is Scalene.")
}