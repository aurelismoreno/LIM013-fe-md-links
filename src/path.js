const path = require('path'); //Modulo path que permite interactuar con rutas de archivos y directorios
const fs = require('fs'); // Modulo para interactuar con el sistema de archivos.

//Funcion para validar path, devuelve boolean si ruta es valida
const noPath = ['.', '..'];
const pathExists = (route) =>
  noPath.includes(route) ? false : fs.existsSync(route);

//Funcion para validar si la ruta es absoluta en caso contrario convertir a absoluta

const typesPath = (route) => {
  let pathAbsoluta;
  if (!path.isAbsolute(route)) {
    pathAbsoluta = path.resolve(route);
  } else {
    pathAbsoluta = route;
  }
  return pathAbsoluta;
};

module.exports = { typesPath, pathExists };
