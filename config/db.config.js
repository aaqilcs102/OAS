const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/oas")
  .then(success => {
    console.log("connection with mongodb established successfully.");
  })
  .catch(err => {
      console.log('name: ' + err.name);
      console.log('message: ' + err.message);
  });

module.exports = mongoose;
