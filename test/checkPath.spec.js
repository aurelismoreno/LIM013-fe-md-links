/* eslint-disable no-undef */
const testPath = require('../src/checkPath.js');
const { pathExists } = require('../src/checkPath.js'); // Destructuracion del objeto

// -----Test para probar la funcion isValidPath-----------------
/* eslint-disable-next-line no-undef */
describe('Deberia validar si el path (ruta) existe', () => {
  it('Debería ser una función', () => {
    expect(typeof pathExists).toBe('function');
  });
  it('Debería retornar true si es la ruta es válida', () => {
    expect(testPath.pathExists('.\\README.md')).toBe(true);
  });
  it('Debería retornar false si es la ruta no es válida', () => {
    expect(testPath.pathExists('C:\\Users\\C:\\projects')).toBe(false);
  });
});
// -----Test para probar la funcion 'typesPath'--------------
const pathRelativo = '.\\README.md';
const pathAbsoluto = 'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md';
const Result = 'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md';
const pathDirectory = 'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-linkssrc';

describe('Debería evaluar si el path es absoluto en caso contrario convertirlo a absoluto', () => {
  it('Debería ser una función', () => {
    expect(typeof testPath.convertPath).toBe('function');
  });
  it('Debería retornar la ruta absoluta', () => {
    expect(testPath.convertPath(pathRelativo)).toBe(pathAbsoluto);
  });
  it('Debería retornar la ruta absoluta de README.md', () => {
    expect(testPath.convertPath('README.md')).toEqual(Result);
  });
});
// -----Test para probar la funcion 'isFile'--------------
describe('Debería evaluar si el path es un archivo ', () => {
  it('Debería ser una funcion', () => {
    expect(typeof testPath.isFile).toEqual('function');
  });
  it('Debería recibir un path absoluto y retornar un booleano', () => {
    expect(testPath.isFile('./README.md')).toBe(true);
  });
  it('Debería recibir un string y retornar un booleano', () => {
    expect(testPath.isFile(process.cwd())).toBe(false);
  });
});

// -----Test para probar la funcion 'isdirectory'--------------
describe('Debería evaluar si el path es un directorio', () => {
  it('Debería ser una función', () => {
    expect(typeof testPath.isDir).toBe('function');
  });
  it('Devuelve true si es directorio', () => {
    expect(testPath.isDir(pathDirectory)).toEqual(true);
  });
  it('Devuelve false si no es directorio ', () => {
    expect(testPath.isDir('README.md')).toEqual(false);
  });
});
// -----Test para probar la funcion 'isMd'--------------
describe('Debería evaluar si el path es un archivo Markdown', () => {
  it('Debería ser una función', () => {
    expect(typeof testPath.isMd).toBe('function');
  });
  it('Devuelve true si es archivo MD', () => {
    expect(testPath.isMd('README.md')).toEqual(true);
  });
  it('Devuelve false si no es archivo MD', () => {
    expect(testPath.isMd('REDAME.txt')).toEqual(false);
  });
});
