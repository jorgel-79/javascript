var obj = [{
    "nombre" : "Juan",
    "apellido" : "Leon",
    "edad" : 18
}, {
    "nombre" : "Juan",
    "apellido": "Leon",
    "edad": 20
}
]

var estudiFinales = obj.map((item, key) => {

    if (item.edad >=20) {
        item["Adulto"] = true
        return item
    } else {
        item["Adulto"] = false
        return item
    }
})

console.log("el nuevo arreglo es :", estudiFinales)