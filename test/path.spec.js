const testPath = require('../src/path.js');
const { pathExists } = require('../src/path.js'); // Destructuracion del objeto

//-----Test para probar la funcion isValidPath-----------------
describe('Deberia validar si el path (ruta) existe', () => {
  it('Debería ser una función', () => {
    console.log(testPath.pathExists);
    expect(typeof pathExists).toBe('function');
  });
  it('Debería retornar true si es la ruta es válida', () => {
    expect(testPath.pathExists('.\\README.md')).toBe(true);
  });
  it('Debería retornar false si es la ruta no es válida', () => {
    expect(testPath.pathExists('C:\\Users\\C:\\projects')).toBe(false);
  });
});
//-----Test para probar la funcion 'typesPath'--------------
const pathRelativo = '.\\README.md';
const pathAbsoluto =
  'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md';
const Result =
  'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md';

describe('Debería evaluar si el path es absoluto en caso contrario convertirlo a absoluto', () => {
  it('Debería ser una función', () => {
    expect(typeof testPath.typesPath).toBe('function');
  });
  it('Debería retornar la ruta absoluta', () => {
    expect(testPath.typesPath(pathRelativo)).toBe(pathAbsoluto);
  });
  it('Debería retornar la ruta absoluta de README.md', () => {
    expect(testPath.typesPath('README.md')).toEqual(Result);
  });
});
