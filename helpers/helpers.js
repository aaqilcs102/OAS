const jwt = require("jsonwebtoken");
const config = require("../config");

let helpers = (module.exports = {
  verifyJWTToken: function(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, config.secret, (err, decodedToken) => {
        if (err || !decodedToken) {
          return reject(err);
        }
        resolve(decodedToken);
      });
    });
  },
  emailValidator: function(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }
});
