const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  pollsCreated: {
    type: Array,
  }
});

module.exports = mongoose.model('User', UserSchema);
