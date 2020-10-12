const testPath = require('../src/path.js');
//------------------------------------------
const pathRelativo = '.\\README.md';
const pathAbsoluto =
  'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md';
const Result =
  'C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md';
//Test para probar la funcion 'typesPath'
describe('Debería evaluar una ruta', () => {
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
