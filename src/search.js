/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const pathCheck = require('./pathCheck.js');

// Recorre archivo MD y devuelve links encontrados con custom renderer de marked.
const findLinks = (fileMd) => {
  const arrLinks = [];
  const mdAbsolute = pathCheck.typesPath(fileMd);
  const markdown = fs.readFileSync(mdAbsolute, 'utf8');
  const pintar = new marked.Renderer();

  // renderizar solo el texto de un enlace
  // -----------------href, title, text
  pintar.link = (myhref, mytitle, mytext) => {
    arrLinks.push({
      href: myhref,
      text: mytext.substring(0, 50),
      file: fileMd,
    });
  };

  marked(markdown, { renderer: pintar });

  return arrLinks;
};
// console.log(findLinks('C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md'));

// Recorre directorio y devuelve los archivos Md encontrados con custom renderer de marked.

const findMd = (route) => {
  let arrfileMd = [];
  const readDir = fs.readdirSync(route);
  if (pathCheck.isFile(route)) {
    if (pathCheck.isMd(route)) {
      arrfileMd.push(route);
    }
  } else {
    readDir.forEach((file) => {
      const allpathMd = path.join(route, file);
      arrfileMd = arrfileMd.concat(findMd(allpathMd));
    });
  }
  return arrfileMd;
};
console.log(findMd('C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links'));
module.exports = {
  findLinks, findMd,
};
