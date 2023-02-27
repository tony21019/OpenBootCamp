const listaCompra = ["leche", "huevos", "carne", "pollo", "verduras"];

listaCompra.push("Aceite de Girasol");
listaCompra.pop();

const listaPeliculas = [
    {titulo: "Gato con botas", director: "Joel Crawford", fecha: new Date(2022, 11, 20)},
    {titulo: "Maze runner", director: "Wes Ball", fecha: new Date(2014, 8, 19)},
    {titulo: "Knives out", director: "Rian Johnson", fecha: new Date(2019, 8, 7)}
];

const fechas = listaPeliculas.filter(dates => dates.fecha > new Date(2010, 0, 1));
const directores = listaPeliculas.map(director => {
    return director.director
});

const titulos = listaPeliculas.map(titulo => {
    return titulo.titulo
});

const dirTitulos = directores.concat(titulos) ;
const dirTitulos_prop = [...directores, ...titulos];

