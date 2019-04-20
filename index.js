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
  sayHiToGrandma("Hello".toLowerCase())
  return ("I Can't Hear You.")
  sayHiToGrandma("Hello".toUpperCase())
  return("YES, INDEED!")
  sayHiToGrandma("I love you, Grandma.")
  return("I love you, too.")
}