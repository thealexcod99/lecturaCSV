const fs = require('fs')

//console.log(process.argv)

if (!process.argv[2]) {
  console.log('Falta argumento...')
  process.exit(1)
}

let ruta = process.argv[2]

fs.readFile(ruta, 'utf-8', (err, data) => {
  if (err) {
    console.log('No existe el archivo')
    process.exit(2)
  }
  console.log(data)
})

 