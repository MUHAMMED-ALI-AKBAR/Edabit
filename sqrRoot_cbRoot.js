function checkSquareAndCube(num1,num2){
if ( Math.sqrt(num1) ==  Math.cbrt(num2)){
  return true
} else if ( Math.sqrt(num1) !=  Math.cbrt(num2)){
  return false;
}
}

console.log(checkSquareAndCube(4, 8))

console.log(checkSquareAndCube(16, 48))

console.log(checkSquareAndCube(9, 27))

// ➞ true
// ➞ false
// ➞ true