const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  optionOne: {
    type: String,
    required: true
  },
  optionTwo: {
    type: String,
    required: true
  }
  optionThree: {
    type: String,
  }
  optionFour: {
    type: String,
  }
  optionFive: {
    type: String,
  }
});

module.exports = mongoose.model('Poll', PollSchema);
