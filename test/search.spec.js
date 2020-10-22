/* eslint-disable no-undef */
const search = require('../src/search.js');

describe('Debería añadir las propiedades href,text,file de cada archivo Md', () => {
  it('Es una funcion', () => {
    expect(typeof search.findLinks).toBe('function');
  });
  // it('Devuelve links de fileMD encontrados en directorios', () => {
  //   const arrDir = search.contentDir(dt.route);
  //   expect(search.Files(arrDir)).toEqual(dt.linksDirResult);
  // });
  // it('Devuelve [] si no encuentra links', () => {
  //   const arrDirNone = search.contentDir(dt.routeNone);
  //   expect(search.Files(arrDirNone)).toEqual([]);
  // });
});
