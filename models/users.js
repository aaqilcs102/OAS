const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = (module.exports = mongoose.model("user", {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    minlength: 5
  },
  mobileNumber: {
    type: String
  },
  password: {
    type: String,
    minlength: 5,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}));

user.register = (userInput, password) => {
  const { name, email, userType } = userInput;
  return new user({
    name,
    email,
    userType,
    password
  }).save();
};

user.login = userInput => {
  const { email, password, userType } = userInput;
  return user.findOne({ email, userType });
};
