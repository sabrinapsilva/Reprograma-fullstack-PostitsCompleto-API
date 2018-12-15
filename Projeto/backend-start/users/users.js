//const postits = require('../postits/postits.js');

let mongoose = require('mongoose');

let Schema =mongoose.Schema;

let UserSchema = new Schema(
  {
    _id:{type: mongoose.Schema.Types.ObjectId, auto: true},
    email: {type: String, unique: true},
    password: {type: String},
    name: {type: String},
    phone: {type: String}
  },
  {
    collecticon: "users",
    versionKey: false
  }
)

let users = mongoose.model("users", UserSchema)

module.exports = users;
