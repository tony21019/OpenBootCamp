let nombre = "Anthony"
let apellido = "Molina"
let estudiante = nombre + " " + apellido

console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let numLetras = estudiante.length
console.log(numLetras)

let firstLetra = nombre[0]
console.log(firstLetra)

let lastLetra = apellido.slice(-1)
console.log(lastLetra)

let sinEspacios = estudiante.replace(/ /g, "")
console.log(sinEspacios)

let boolean = estudiante.includes(nombre)
console.log(boolean)