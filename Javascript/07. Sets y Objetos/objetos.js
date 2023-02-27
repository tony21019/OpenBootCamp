const obj = {
    nombre: "Anthony",
    apellido: "Molina",
    edad: 20,
    altura: 1.70,
    isDeveloper: true
}

const edad = obj.edad

const list = [{...obj}, {
    nombre: "Oscar",
    apellido: "Nigrinis",
    edad: 20,
    altura: 1.80,
    isDeveloper: false
},
{
    nombre: "Alberto",
    apellido: "Gonzalez",
    edad: 21,
    altura: 1.80,
    isDeveloper: true
}]

const listOrdenada = list.sort((a,b) => b.edad - a.edad)

console.log(listOrdenada);

