// Write a program to find the factorial of all prime numbers between a given range . Range will be passed as 2 values in the function parameters.
function prime(start,end){
    for(let i= start;i<=end;i++){

    if(i==1)
    {
        continue;
    }

    const number = i;
    let prime = true;
    
    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        // console.log(number);
        ans = 1;
        for (var k = number; k >= 2; k--)
        {
            ans = ans * k;
        }
        console.log(`The factorial of ${number} is ${ans}`);
    } 
  }
};
prime(100,300)