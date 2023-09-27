function lessThan100(num1, num2){
  if( num1 + num2 < 100){
    return true
  }else{
    return false; 
  }
}

console.log(lessThan100(22, 15) )
// 22 + 15 = 37

console.log(lessThan100(83, 34))
// 83 + 34 = 117

console.log(lessThan100(3, 77) )

// ➞ true
// ➞ false
// ➞ true