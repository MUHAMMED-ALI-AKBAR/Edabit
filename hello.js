function helloWorld(num){
   if(num % 3 == 0 &&  num % 5 == 0){
    return "hello world"
  }
  else if ( num % 3 == 0){
    return "hello"
  }else if( num % 5 == 0){
    return "world"
  }else{
    return "enter valid num" 
  }
}

console.log(helloWorld(3) )

console.log(helloWorld(5))

console.log(helloWorld(15))

// ➞ "Hello"
// ➞ "World"
// ➞ "Hello World"