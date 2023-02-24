const { Schema, model } = require('mongoose');
const {isEmail} = require('validator')

// Schema to create Post model
const userSchema = new Schema(
  {
    name: [{type:String, unique:true, required:true, tri:true }],
    email: [{type:String, unique:true, required:true, validate: [ isEmail, 'invalid email' ]}],
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends:[{ type: Schema.Types.ObjectId, ref: 'Thought' }]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }  
);

// Create a virtual property `commentCount` that gets the amount of comments per post
// userSchema.virtual('thoughts').get(function () {
//   return this.thoughts.length;
// });

// Initialize our Post model
const User = model('user', userSchema);

module.exports = User;
