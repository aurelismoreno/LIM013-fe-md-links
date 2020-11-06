const path = require('path');
const fs = require('fs');
const checkPath = require('./checkPath.js');
// Recorre directorio y devuelve los archivos Md encontrados

const findMd = (route) => {
  let arrAllfileMd = [];

  if (checkPath.isFile(route)) {
    if (checkPath.isMd(route)) {
      arrAllfileMd.push(route);
    }
  } else {
    const readDir = fs.readdirSync(route, 'utf-8');
    readDir.forEach((file) => {
      const allpathMd = path.join(route, file);
      arrAllfileMd = arrAllfileMd.concat(findMd(allpathMd));
    });
  }
  return arrAllfileMd;
};

// eslint-disable-next-line no-console
// eslint-disable-next-line max-len
// console.log(findMd('C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\directoryPruebaMd'));

module.exports = {
  findMd,
};
