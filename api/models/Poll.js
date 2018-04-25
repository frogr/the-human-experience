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
  optionOneVotes: {
    type: Number,
    default: 0;
  }
  optionTwo: {
    type: String,
    required: true
  }
  optionTwoVotes: {
    type: Number,
    default: 0;
  }
  optionThree: {
    type: String,
  }
  optionThreeVotes: {
    type: Number,
    default: 0;
  }
  optionFour: {
    type: String,
  }
  optionFourVotes: {
    type: Number,
    default: 0;
  }
  optionFive: {
    type: String,
  }
  optionFiveVotes: {
    type: Number,
    default: 0;
  }
});

module.exports = mongoose.model('Poll', PollSchema);
