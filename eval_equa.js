function eq(str){
  return str.map(Number)
}

console.log(eq("1+2"))

console.log(eq("6/(9-7)") )

console.log(eq("3+2-4") )

// ➞ 3
// ➞ 3
// ➞ 1