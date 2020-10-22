## Metodos utilizados

1. fs.existsSync : para determinar si el path existe
2. path.isAbsolute : para determinar si el path es asbsoluto
3. path.resolve : para convertir el path a absoluto
4. path.parse :se usa para devolver un objeto cuyas propiedades representan la ruta dada.
5. fs.statSync / .isFile : se utiliza para devolver de forma asincrónica información sobre la ruta de archivo dada
6. fs.readFileSync :Para leer un archivo debes usar,Éste devuelve un objeto Buffer con los
  contenidos del archivo

## ---------------------
fs.readdirSync(inputFolder).forEach(function (dirContent) {
      dirContent = path.resolve(inputFolder, dirContent);
      if (getSubFolders && fs.statSync(dirContent).isDirectory()) {
        results = results.concat(helpers.findLUFiles(dirContent, getSubFolders, extType));
      }
      if (fs.statSync(dirContent).isFile()) {
        if (dirContent.endsWith(extType)) {
          results.push(dirContent);
        }
      }
    });
## ---------------------
Puedes acceder a los argumentos de la línea de comandos usando el objeto      
  global process, el cual tiene una propiedad argv que es un array con toda     
  la información del comando. Ej: process.argv.
## ---------------------
dado un directorio imprima una lista de archivos
  filtrados por la extensión
'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })