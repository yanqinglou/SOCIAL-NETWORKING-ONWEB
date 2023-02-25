const { Schema, model } = require('mongoose');
const {isEmail} = require('validator')

// Schema to create Post model
const userSchema = new Schema(
  {
    name: {type:String, unique:true, required:true, tri:true },
    email: {type:String, unique:true, required:true, validate: [ isEmail, 'invalid email' ]},
    thoughts: { type: Schema.Types.ObjectId, ref: 'Thought' },
    friends:{ type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }  
);



// Initialize our Post model
const User = model('user', userSchema);

module.exports = User;
