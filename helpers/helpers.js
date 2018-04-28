const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyJWTToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.secret, (err, decodedToken) =>  {
      if (err || !decodedToken) {
        return reject(err);
      }
      resolve(decodedToken);
    });
  });
}

module.exports = {
    verifyJWTToken
}