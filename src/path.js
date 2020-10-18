const path = require('path'); //Modulo path que permite interactuar con rutas de archivos y directorios
const fs = require('fs'); // Modulo para interactuar con el sistema de archivos.

//Funcion para validar path, devuelve boolean si ruta es valida

const pathExists = (route) => fs.existsSync(route);

//Funcion para validar si el path es absoluta en caso contrario convertir a absoluta

const typesPath = (route) => {
  let pathAbsoluta;
  if (!path.isAbsolute(route)) {
    pathAbsoluta = path.resolve(route);
  } else {
    pathAbsoluta = route;
  }
  return pathAbsoluta;
};
//Funcion para validar si el path, es un archivo
const isFile = (route) => {
  let pathFile = fs.statSync(route);
  let result = pathFile.isFile();
  return result;
};

module.exports = { pathExists, typesPath, isFile };
