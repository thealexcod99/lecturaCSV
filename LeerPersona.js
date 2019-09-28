const fs = require('fs')
const Persona = require('./Persona')

//console.log(process.argv)

if (!process.argv[2]) {
  console.log('Falta argumento...')
  process.exit(1)
}

let ruta = process.argv[2]
let datos

fs.readFile(ruta, 'utf-8', (err, data) => {
  if (err) {
    console.log('No existe el archivo')
    datos = data
    process.exit(2)
  }
  console.log(data)
})

let lineasCSV = datos.split("\n")
let personaCSV
let listaPersonas
let persona = new Persona()

for (let i=1; i < lineasCSV.size()-1; i++) {
  personaCSV = lineasCSV[i].split(",")
  persona.nombre = personaCSV[0]
  persona.apellido = personaCSV[1]
  persona.email = personaCSV[2]
  persona.sexo = personaCSV[3]

  listaPersonas.push(persona)
}

for (let i=0; i < listaPersonas.size(); i++){
  console.log(listaPersonas[i])
}