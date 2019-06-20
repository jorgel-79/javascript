var array = [1,2,3,23,54,67,7878,8934,2443]
var suma = 0

array.forEach(function(element){
    console.log(`este es un elemento del array :> ${element}`)
    suma = suma + element
})

console.log(`la suma total de sus elementos es : ${suma}`)

array.forEach((element,index)=>{
    console.log(`este es un elemento del array :> ${element}`)
    console.log(`este es un elemento del index :> ${index}`)
    suma = suma + element
})

console.log(`la suma total de sus elementos es : ${suma}`)