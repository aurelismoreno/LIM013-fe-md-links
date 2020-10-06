/* const path = require("path"); */


const isMD = (checkPath) => {
  let rpta = false;
  if (path.parse(checkPath).ext === ".md") {
    rpta = true;
  }
  return rpta;
};

const isDir = (checkPath) => {
  let rpta = false;
  if (path.parse(checkPath).ext === "") {
    rpta = true;
  }
  return rpta;
};

module.exports = { isMD, isDir };
