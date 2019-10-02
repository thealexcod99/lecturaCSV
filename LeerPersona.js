//A ver mete todo dentro de la funcion de lectura del fichero y al añadir las personas crealas en el bucle
//no crees una externa y luego rellenes


const fs = require('fs')
const Persona = require('./Persona')

//console.log(process.argv)

if (!process.argv[2]) {
  console.log('Falta argumento...')
  process.exit(1)
}

let ruta = process.argv[2]
let lineasCSV
let personaCSV
let listaPersonas=[]


fs.readFile(ruta, 'utf-8', (err, data) => {
  if (err) {
    console.log('No existe el archivo')
    process.exit(2)
  }
  
  lineasCSV = data.split('\n')
  
  for (let i=1; i < lineasCSV.length -1; i++) {
    personaCSV = lineasCSV[i].split(',')
    let persona = new Persona(personaCSV[0], personaCSV[1], personaCSV[2], personaCSV[3])
    listaPersonas.push(persona)
  }
  
  for (let i=0; i < listaPersonas.length; i++){
    console.log(listaPersonas[i])
  }
  
})







