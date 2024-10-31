/*
#1
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.*/
console.log("Exercise  1")
function sumRange(number){
    if(number <= 1){
        return number
    }
    else{
        return number + sumRange(number-1);
    }
}
console.log(sumRange(4))

/*
#2
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
 */
console.log("Exercise  2")
function power(base, exp){
    if(exp == 0){
        return 1
    } else{
       result = base * power(base, exp-1);
       return result
    }
}

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1

/*
#3
Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number 
is the result of that number multiplied by the number before it, and the number before that number,
 and so on, until you reach 1. The factorial of 1 is just 1.
 */
 console.log("Exercise  3")
function factorial(number){
    if(number == 1){
        return 1
    } else{
        return number * factorial(number-1)
    }
}
console.log(factorial(4))

/*
#4
Write a function called all which accepts an array and a callback and returns true if every value in
 the array returns true when passed as parameter to the callback function
 Sample
 var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false
 */

/*
var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});
*/
console.log("Exercise  4")

function all(arr, callback){
    if(callback(arr[arr.length-1])){
        console.log(arr)
        arr.splice(-1,1);
        console.log(arr)
        all(arr, callback)
        console.log("rec")
        return true
    } else {
        console.log("break")
        console.log(arr)
        return false
    }
    

    



}



var allAreLessThanSeven = all([1,2,9,1], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false




/*
#5
Write a function called productOfArray which takes in an array of numbers and returns the product of them all
var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60
 */
console.log("Exercise  5")

function productOfArray(array){
    if(array.length == 1){
        return array.toString();
    } else{
        let product =array[array.length-1] * array[array.length-2];
        array[array.length-2] = product;
        array.splice(-1,1);
        productOfArray(array);
        return array.toString();
    }
}

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60
console.log(six)
console.log(sixty)

/*
#6
 */
console.log("Exercise  6")





/*
#7
Given a multi-dimensional integer array, return the total number of integers stored inside this array
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
 */




/*
#8
Write a function that sums squares of numbers in list that may contain more lists
var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
 */

/*
#9 +
The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should 
return [5,5,5]. If the times argument is negative, return an empty array.
console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []
 */  

console.log("Exercise 9")
function replicate(times, number){
    if(times <= 0){
        return [];
    } else {
        return [number].concat(replicate(times-1, number));
    }
}
console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []