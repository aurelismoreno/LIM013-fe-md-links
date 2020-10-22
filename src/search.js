const fs = require('fs');
const marked = require('marked');
const pathCheck = require('./pathCheck.js');

// Recorre archivo MD y devuelve links encontrados con custom renderer de marked.
const findLinks = (fileMd) => {
  const arrLinks = [];
  const mdAbsolute = pathCheck.typesPath(fileMd);
  const markdown = fs.readFileSync(mdAbsolute, 'utf8');
  const pintar = new marked.Renderer();

  // renderizar solo el texto de un enlace
  pintar.link = (myhref, title, text) => {
    arrLinks.push({
      href: myhref,
      text: text.substring(0, 50),
      file: fileMd,
    });
  };

  marked(markdown, { renderer: pintar });

  return arrLinks;
};

// Recorre directorio y devuelve los archivos Md encontrados con custom renderer de marked.
module.exports = {
  findLinks,
};
