class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getName() {
        return {
            "nombre": `${this.nombre + "." + this.apellido}`
        }
    }

    getEdad() {
        return {
            "edad": this.edad
        }

        
        }
    }
}

var estudiante1 = new Persona("Juan", "Leon", 23)
var estudiante2 = new Persona("Alejandra", "Leon", 18)
var Datos = estudiante1.getName()
var Edad = estudiante2.getEdad()
console.log(`los datos del estudiante : \n Nombre ${datos.nombre} \n Edad ${Datos.Edad}`)
console.log(estudiante2.getName(), estudiante1.getEdad())