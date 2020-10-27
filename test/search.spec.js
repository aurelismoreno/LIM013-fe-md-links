/* eslint-disable no-undef */
const search = require('../src/search.js');

const pathAbsoluto = 'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md';

const result = [
  {
    href: '#1-preámbulo',
    text: '1. Preámbulo',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: '#2-resumen-del-proyecto',
    text: '2. Resumen del proyecto',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: '#3-objetivos-de-aprendizaje',
    text: '3. Objetivos de aprendizaje',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: '#4-consideraciones-generales',
    text: '4. Consideraciones generales',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: '#5-criterios-de-aceptación-mínimos-del-proyecto',
    text: '5. Criterios de aceptación mínimos del proyecto',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: '#6-entregables',
    text: '6. Entregables',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: '#7-pistas-tips-y-lecturas-complementarias',
    text: '7. Pistas, tips y lecturas complementarias',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: '#8-checklist',
    text: '8. Checklist',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import',
    text: '<code>import</code>',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export',
    text: '<code>export</code>',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
    text: 'Uso de callbacks.',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href:
      'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href:
      'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'fs',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'path',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://www.npmjs.com/',
    text: 'npm',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: '(CommonJS)',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://docs.npmjs.com/files/package.json',
    text: 'Configuración de package.json.',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    text: 'Configuración de npm-scripts',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://jestjs.io/docs/es-ES/getting-started',
    text: 'Testeo unitario.',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://jestjs.io/docs/es-ES/asynchronous',
    text: 'Testeo asíncrono.',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://jestjs.io/docs/es-ES/manual-mocks',
    text: 'Uso de librerias de Mock.',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'http.get',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
    text: 'Recursión.',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://jestjs.io/',
    text: 'Jest',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de <code>npm install</code> acá',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://github.com/Laboratoria/course-parser',
    text: '<code>course-parser</code>',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href:
      'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (<code>RegExp</code>)',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://github.com/jsdom/jsdom',
    text: 'JSDOM',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://github.com/cheeriojs/cheerio',
    text: 'Cheerio',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'http://community.laboratoria.la/c/js',
    text: 'foro de la comunidad',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://github.com/stevekane/promise-it-wont-hurt',
    text: 'promise-it-wont-hurt',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Acerca de Node.js - Documentación oficial',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'Node.js file system - Documentación oficial',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'Node.js http.get - Documentación oficial',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Node.js',
    text: 'Node.js - Wikipedia',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href:
      'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
    text: 'What exactly is Node.js? - freeCodeCamp',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
    text: '¿Qué es Node.js y para qué sirve? - drauta.com',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
    text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt e',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href:
      'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
    text: '¿Simplemente qué es Node.js? - IBM Developer Works',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
    text: 'Node.js y npm',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href:
      'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text: 'Módulos, librerías, paquetes, frameworks... ¿cuál ',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://carlosazaustre.es/manejando-la-asincronia-en-javascript',
    text: 'Asíncronía en js',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://docs.npmjs.com/getting-started/what-is-npm',
    text: 'NPM',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Crear módulos en Node.js',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
    text: 'Leer un archivo',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href:
      'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://javascript.info/promise-basics',
    text: 'Promise',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href:
      'https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1',
    text: 'Comprendiendo Promesas en Js',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s',
    text: 'Pill de recursión - video',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
  {
    href: 'https://github.com/merunga/pildora-recursion',
    text: 'Pill de recursión - repositorio',
    file:
      'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',
  },
];
// -----Test para probar la funcion 'findLinks'--------------
describe('Deberia extraer los links encontrados en archivo Markdown', () => {
  it('Debería ser una función', () => {
    expect(typeof search.findLinks).toBe('function');
  });
  it('Devuelve links de archivo MD', () => {
    expect(search.findLinks(pathAbsoluto)).toEqual(result);
  });
  it('Devuelve [] si no encuentra links', () => {
    expect(search.findLinks('C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\src\\APUNTES.md')).toEqual([]);
  });
});

// -----Test para probar la funcion 'findMd'--------------
describe('Deberia extraer los Markdown encontrados en un directorio ', () => {
  it('Debería ser una función', () => {
    expect(typeof search.findMd).toBe('function');
  });
  it('Devuelve links de fileMD encontrados en directorios', () =>{
    expect(search.findMd('C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\src\\APUNTES.md')).toEqual('C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\src');
  });
  // it('Devuelve [] si no encuentra links', () => {
  //   expect(search.findMy(getPath("test\\directory-test\\hola.md"))).toEqual([getPath("test\\directory-test\\hola.md")]);
  // });
});
