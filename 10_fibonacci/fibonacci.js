const fibonacci = function(n) {
 //make an empty array
    const fibArray = []; //for generating initial array till n + 1
 if (n <= 0) {
   return "OOPS";
 }
 else if (n != Number) {
    n = parseInt(n);
 }
 fibArray.push(0, 1);
 for (i = 2; i < n + 1; i++) {
   const nextNum = fibArray[i - 1] + fibArray[i - 2];
   fibArray.push(nextNum);
 }
 return fibArray[n];
}

 //if n is negative return "OOPS"
 //else if n is a string or a number , convert it using ParseInt
    //return number present at n index


// Do not edit below this line
module.exports = fibonacci;
