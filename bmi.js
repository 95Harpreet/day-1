const chd=require('readline-sync')
var bmi,w,h
w= chd.questionInt('enter your weight in kgs')
h=chd.questionInt('enter your height in meters')
bmi=w/(h*h)
console.log(`body mass index is ${bmi}`)