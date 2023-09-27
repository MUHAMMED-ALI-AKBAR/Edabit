function animals( chicken, cow, goat){
let total = 0;
 let total_of_chicken = chicken * 2;
 let total_of_cow = cow * 4;
 let total_of_goat = goat * 4;
 total += total+ total_of_chicken + total_of_goat + total_of_cow;
 return total
}


console.log(animals(2, 3, 5) )

console.log(animals(1, 2, 3) )

console.log(animals(5, 2, 8) )

// ➞ 36
// ➞ 22
// ➞ 50