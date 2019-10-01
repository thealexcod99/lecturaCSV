//A ver mete todo dentro de la funcion de lectura del fichero y al añadir las personas crealas en el bucle
//no crees una externa y luego rellenes


const fs = require('fs')
const Persona = require('./Persona.js')

//console.log(process.argv)

if (!process.argv[2]) {
  console.log('Falta argumento...')
  process.exit(1)
}

let ruta = process.argv[2]
let datos
let lineasCSV
let personaCSV
let listaPersonas


fs.readFile(ruta, 'utf-8', (err, data) => {
  if (err) {
    console.log('No existe el archivo')
    process.exit(2)
  }
  datos = data  
  separarPersonas()
})

function separarPersonas() {
  lineasCSV = datos.split('\n')
  console.log(typeof(lineasCSV))
  //let persona = new Persona()
  // for (let i=1; i < lineasCSV.size()-1; i++) {
  //   personaCSV = lineasCSV[i].split(',')

    // persona.nombre = personaCSV[0]
    // persona.apellido = personaCSV[1]
    // persona.email = personaCSV[2]
    // persona.sexo = personaCSV[3]
  
    // listaPersonas.push(persona)
  //}
  
  // for (let i=0; i < listaPersonas.size(); i++){
  //   console.log(listaPersonas[i])
  // }
}





