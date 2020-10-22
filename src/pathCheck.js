const path = require('path'); // Modulo path que permite interactuar con rutas de archivos y directorios
const fs = require('fs'); // Modulo para interactuar con el sistema de archivos.

// Funcion para validar path, devuelve boolean si ruta es valida

const pathExists = (route) => fs.existsSync(route);

// Funcion para validar si el path es absoluta en caso contrario convertir a absoluta

const typesPath = (route) => {
  let pathAbsoluta;
  if (!path.isAbsolute(route)) {
    pathAbsoluta = path.resolve(route);
  } else {
    pathAbsoluta = route;
  }
  return pathAbsoluta;
};
// Funcion para validar si el path, es un archivo
const isFile = (route) => {
  const pathFile = fs.statSync(route);
  const result = pathFile.isFile();
  return result;
};
// Funcion para validar si el path, es un  directorio
const isdirectory = (route) => {
  let pathDir = false;
  if (path.parse(route).ext === '') {
    pathDir = true;
  }
  return pathDir;
};
// Funcion para validar si es archivo Markdown
const isMd = (route) => {
  let pathMd = false;
  if (path.parse(route).ext === '.md') {
    pathMd = true;
  }
  return pathMd;
};

module.exports = {
  pathExists, typesPath, isFile, isdirectory, isMd,
};
