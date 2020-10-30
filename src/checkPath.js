/* eslint-disable no-console */
// Módulos de node.js

// path: Proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');
// fs: Proporciona una API para interactuar con el sistema de archivos.
const fs = require('fs');

// fs.existsSync(path): Método síncrono. Prueba si la ruta dada existe o no, verificando
// el sistema de archivos. Devuelve true si la ruta existe, false de lo contrario.

const pathExists = (route) => fs.existsSync(route);

// Funcion para validar si el path es absoluta en caso contrario convertir a absoluta

const convertPath = (route) => {
  let pathAbsoluta;
  // path.isAbsolute(path): Determina si la ruta recibida es absoluta. Retorna un booleano.
  if (!path.isAbsolute(route)) {
  // path.resolve(path): Convierte una secuencia de rutas o segmentos de ruta en una
  // ruta absoluta. Retorna dicha ruta como String.
    pathAbsoluta = path.resolve(route);
  } else {
    pathAbsoluta = route;
  }
  return pathAbsoluta;
  // let pathAbsoluta = !path.isAbsolute(route) ?  path.resolve(route) : route;
  // return pathAbsoluta;
};

// Funcion para validar si el path, es un archivo
// fs.statSync(path): Devuelve un objeto que proporciona información sobre un archivo.
// stats.isFile(): Devuelve true si el objeto fs.Stats describe un archivo normal.
const isFile = (route) => {
  const pathFile = fs.statSync(route);
  const result = pathFile.isFile();
  return result;
};
// Funcion para validar si el path, es un  directorio
const isDir = (route) => {
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
// console.log(typesPath('C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\src'));
module.exports = {
  pathExists,
  convertPath,
  isFile,
  isDir,
  isMd,
};
