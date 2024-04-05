let array = new Array(1,2,3,4,5,6,7,8,9)

//PUSH:pushes in last of array
array.push(10)

//UNSHIFT: pushes in beginning of array
array.unshift(0)

//POP: Removes last element
array.pop()

//SHIFT: Opposite of unshift It removes element from start
array.shift()

//UPDATING ANY ELEMENT
array[0] = 0

const Name = ["ajay","aman","praful","nidhi","Himanshu","ajay"]

//INDEXOF: To know about the index and as it founds the element first then it will stop
Name.indexOf("ajay")
// console.log(Name.indexOf("ajay"))

//INDEXOF: To know about next index of the array use ","
Name.indexOf("ajay",1)
// console.log(Name.indexOf("ajay",1))
//ALSO  WE can use this method to check
Name.lastIndexOf('ajay')
// console.log(Name.lastIndexOf('ajay'))

//INCLUDES: It is used to search whether it includes in array or not (in True or False) and only works on premitive data types
Name.includes('praful')
// console.log(Name.includes('praful'))

//ARRAYS WITH OBJECTS
let youtubeChannel =[{
    name:'FitTuber',
    subscriber:2300000
},
{
    name:'Samay Raina',
    subscriber:1500000
},
{
    name:'Bharat Chauhan',
    subscriber:150000
}
]

// console.log(youtubeChannel.find((element)=>{
//     return element.subscriber === 1500000
// }))

//CONCAT: Used to join to arrays
let Names1 = ["ajay","aman","praful","nidhi","Himanshu","ajay"]
let Names2 = ["Koushik","Aryan","Omkar","Sachin","Amit","Koushik"]
let Nameing = ["Satish"]
let Names3 = Names1.concat(Names2)
// console.log(Names1.concat(Names2))

//SLICE: Can remove data from required Index (num1,num2) removes index before num1 and removes num2 and rest next to that
Names3.slice(2,6) 
// console.log(Names3.slice(2,6))
let Names4 = [...Names1,...Nameing]
// console.log(Names4)

//LOOPS IN ARRAY
//FOR LOOP
for(let i = 0;i<Names1.length;i++)
{
    // console.log(Names1[i])
}

//FOR OF
for(let Name of Names1)
{
    // console.log(Name)
}

//FOR-EACH
Names1.forEach((name,index)=>{
    // console.log(index,name)
})

//JOIN METHOD : Used to add all element of array into a string.
let student = ['S','h','i','v','a']
let joinStudent = student.join('')
// console.log(student.join(''))

//SPLIT: Opposite of join it splits the string made by the join. It is compulsory to define separator in the above case separator is ""
joinStudent.split('')
// console.log(joinStudent.split(''))

//FILTER: Used to filter the array
let cities = [
    {name:"Mumbai" , population: 1000},
    {name:"Delhi", population: 500},
    {name:"Chennai", population: 250},
    {name:"Bengaluru", population: 1500}
]
cities.filter((cities)=>cities.population > 50)
// console.log(cities.filter((cities)=>cities.population > 50
//  ))

 //MAP: It created new array populated with the result of calling a provided function on every element.

 cities.map(cities=> cities.population * 2) 
console.log(cities.map(cities=> cities.population * 2))








