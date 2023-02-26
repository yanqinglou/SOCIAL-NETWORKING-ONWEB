const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 25,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Schema for what makes up a comment
const thoughtSchema = new Schema(
  {
    text: 
    { type: String, 
    required: true ,
    minLength: 1,
    maxLength: 280
    },
    createAt: { type: Date, default: Date.now() },
    username: { type: String, required: true },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
thoughtSchema.virtual("thoughtsLength").get(function () {
  return this.text.length;
});

// Initialize the Comment model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
