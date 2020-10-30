/* eslint-disable no-console */
const fs = require('fs');
const marked = require('marked');
const checkPath = require('./checkPath.js');

// Recorre archivo MD y devuelve links encontrados con custom renderer de marked.
const findLinks = (fileMd) => {
  const arrLinks = [];
  const mdAbsolute = checkPath.convertPath(fileMd);
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

module.exports = {
  findLinks,
};
