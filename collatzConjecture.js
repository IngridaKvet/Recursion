/* The Collatz conjecture applies to positive integers and speculates
that it is always possible to get back to 1 if you follow these steps:
- if n is 1, stop
- otherwise if n is even, repeat this process on n/2
- otherwise if n is odd, repeat this process on 3n+1.

Write recursive function collatz(n), that calculates how many steps
it takes to get to 1 if you start from n and recurse as indicated above.*/

let steps = 0;
function collatz(n){ 
    console.log(n)
    if(n==1){
        return
    }
    else if(n%2 == 0){
        collatz(n/2)
        steps++;
    }
    else if(n%2 == 1){
        collatz((3*n)+1)
        steps++;
    }
}

collatz(50)
console.log(steps)

/*
function collatz(n){
    //console.log(n)
    if(n==1){
        return 0
    }
    else if(n%2 == 0){
        return 1 + collatz(n/2)
    }
    else if(n%2 == 1){
        return 1 + collatz((3*n)+1)
    }
}
console.log(collatz(27))
*/