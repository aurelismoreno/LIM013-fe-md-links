const path = require('path');

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

module.exports = { typesPath };
