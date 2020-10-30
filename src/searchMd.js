// const path = require('path');
// const fs = require('fs');
// const checkPath = require('./checkPath.js');
// // Recorre directorio y devuelve los archivos Md encontrados con custom renderer de marked.

// const findMd = (route) => {
//   let arrfileMd = [];
//   const readDir = fs.readdirSync(route);
//   if (pathCheck.isFile(route)) {
//     console.log()
//     if (pathCheck.isMd(route)) {
//       arrfileMd.push(route);
//     }
//   } else {
//     readDir.forEach((file) => {
//       const allpathMd = path.join(route, file);
//       arrfileMd = arrfileMd.concat(findMd(allpathMd));
//     });
//   }
//   return arrfileMd;
// };
// console.log(findMd('C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links'));




// const functionsPathFs = require('./validate-path-fs');
// // ---------------------------------------------------

// const { validateTypeArchive, validateDirectory } = functionsPathFs;

// // ----------------------------------------------------
// const validateMarkdownsArchive = (newPath) => {
//   const arrayOfLinksMarkdown = [];

//   if (validateTypeArchive(newPath) === '.md') {
//     arrayOfLinksMarkdown.push(newPath);
//   }

//   return arrayOfLinksMarkdown;
// };
// // ------------------------------------------------------
// const validateMarkdownsDirectory = (newPath) => {
//   const arrayPaths = fs.readdirSync(newPath, 'utf-8');
//   let arrayOfLinksMarkdown = [];
//   arrayPaths.forEach((file) => {
//     const pathName = path.join(newPath, file);
//     if (validateDirectory(pathName)) {
//       const array = validateMarkdownsDirectory(pathName);
//       arrayOfLinksMarkdown = arrayOfLinksMarkdown.concat(array);
//     }

//     const arrayArchivesMarkdown = validateMarkdownsArchive(pathName);
//     arrayArchivesMarkdown.forEach((markdown) => {
//       arrayOfLinksMarkdown.push(markdown);
//     });
//   });

//   return arrayOfLinksMarkdown;
// };

// module.exports = {
//   validateMarkdownsArchive,
//   validateMarkdownsDirectory,
// };
