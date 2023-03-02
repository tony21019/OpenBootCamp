class estudiante{
    nombre = "Anthony"
    asignaturas = ["Javascript", "HTML", "CSS"]
    obtenDatos(){
        return{
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const student = new estudiante()

console.log(student.obtenDatos());