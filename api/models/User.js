const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  }
  bio: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
  pollsCreated: {
    type: Array,
  },
  pollsVotedOn: {
    type: Array,
  },
  comments: {
    type: Array
  }
});

module.exports = mongoose.model('User', UserSchema);
