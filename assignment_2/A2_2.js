/*Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.
*/

let m = -10;

switch (true) {
    case (m > 90 && m<=10): 
        console.log("S Grade");    
        break;
    case (m <=90 && m >80 ): 
        console.log("A Grade");    
        break;
    case (m <=80 && m >70 ): 
        console.log("B Grade");    
        break;
    case (m <=70 && m >60 ): 
        console.log("C Grade");    
        break;
    case (m <=60 && m >50 ): 
        console.log("D Grade");    
        break;
    case (m <=50 && m >40 ): 
        console.log("E Grade");    
        break;
    case (m <=40 && m >=0 ): 
        console.log("Student has failed");    
        break;

    default:
        console.log("Invalid Marks")
        break;
}
