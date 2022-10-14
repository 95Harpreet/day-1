const chd=require('readline-sync')
var a,pi,r
pi=3.14
r=chd.questionInt('enterr the value of radius')
a=pi*(r*r)
console.log(`area of circle is ${a}`)