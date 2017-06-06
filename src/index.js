let Title = document.querySelectorAll('h1')
console.dir(Title) // Node List
console.dir(Array.from(Title)) // Array

let person = {
  name: 'Mario',
  age: 19
}

let { name, age: idade } = person

console.log(`${name} e ${idade}`)

let destrucArray = ['Amanda', 'Monteiro']

{ name, surname }= destrucArray
