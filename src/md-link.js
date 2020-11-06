const checkPath = require('./checkPath.js');
const searchLinks = require('./searchLinks');
const searchMd = require('./searchMd');
const validateLinks = require('./validateLinks.js');

const mdLinks = (route, options) => new Promise((resolve) => {
  if (!checkPath.pathExists(route)) {
    return resolve('no valida');
  }
  let arrLinksFound = [];
  if (checkPath.isFileMD(route)) {
    arrLinksFound = searchLinks.findLinks(route);
  } else if (checkPath.isDir(route)) {
    arrLinksFound = searchMd.findMd(route);
  }
  if (arrLinksFound.length > 0) {
    if (options.validate) {
      arrLinksFound = validateLinks(arrLinksFound);
    }
  }
  return resolve(arrLinksFound);
});

module.exports = {
  mdLinks,
};
// eslint-disable-next-line max-len
// mdLinks('C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test',{validate:false}).then(resp=>console.log(resp))

// mdLinks(
//   'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
//   { validate: false },
// ).then((res) => console.log(res));
