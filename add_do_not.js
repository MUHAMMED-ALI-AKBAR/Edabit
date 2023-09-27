function reversePsychology(str){
  let a = "do not";
  a.concat(" " + str)
  return a
}

console.log(reversePsychology("wash the dishes"))

console.log(reversePsychology("eat your lunch"))

console.log(reversePsychology("go to school") )

// ➞ "Do not wash the dishes."
// ➞ "Do not eat your lunch."
// ➞ "Do not go to school."