const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  
})

// Schema for what makes up a comment
const thoughtSchema = new Schema({
  text: String,
  username: String,
});



// Initialize the Comment model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
