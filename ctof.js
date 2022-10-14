const chd=require('readline-sync')
var c,f
c=chd.questionInt('enter the value of temperature in celcius')
f=c*(9/5)+32
console.log(`temperature in fahrenheit is ${f}`)
    
