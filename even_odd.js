function oddOrEven(str){
  let a = ( str.length % 2 == 0) ? true : false;
  return a
}

console.log(oddOrEven("apples"))
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.

console.log(oddOrEven("pears"))
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.

console.log(oddOrEven("cherry"))