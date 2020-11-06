/* eslint-disable no-param-reassign */
const fetch = require('node-fetch');

const { findLinks } = require('./searchLinks.js');

const validateLinks = (arrLinksFound) => {
  const arrlinks = findLinks(arrLinksFound);
  const arrPromises = arrlinks.map(
    (links) => new Promise((resolve) => fetch(links.href)
      .then((res) => {
        links.status = res.status >= 200 ? 'ok' : 'fail'; // ok o fail
        links.rpta = res.status; // 200 400 404
        resolve(links);
      })
      .catch(() => {
        links.status = 'fail';
        links.rpta = 'no url'; // 200 400 404
        resolve(links);
      })),
  );
  return Promise.all(arrPromises);
};

// eslint-disable-next-line no-console
// eslint-disable-next-line max-len
validateLinks('C:\\Users\\aurel\\Documents\\Proyectos\\LIM013-fe-md-links\\README.md',).then((res) => console.log(res));

const totalLinks = (array) => {
  const total = array.length;
  return total;
};

const uniqueLinks = (array) => {
  const unique = [...new Set(array.map((link) => link.href))];
  return unique.length;
};

const brokenLinks = (array) => {
  const broken = array.filter((link) => link.status === '' || link.statusText === 'Fail');
  return broken.length;
};
module.exports = {
  validateLinks,
  totalLinks,
  uniqueLinks,
  brokenLinks,
};

// export const validateStats = (res) => {
//   const brokens = res.filter((link) => link.statusText === 'Fail').length;
//   return {
//     total: res.length,
//     unique: new Set(res.map(({ href }) => href)).size,
//     broken: brokens,
//   };
// };
