function shout(string) {
 return string.toUpperCase() 
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout() {
   console.log("HELLO")
}
function logWhisper() {
   console.log("hello")
}

function sayHiToGrandma(string) {
 if (string.toLowerCase() === string) 
 console.log(“I can’t hear you!”);
 if (string.toUpperCase() === string )
 console.log(“YES,INDEED!”)
 if (string === `I love you, Grandma.` ) 
 console.log(“I love you, too.”)
}