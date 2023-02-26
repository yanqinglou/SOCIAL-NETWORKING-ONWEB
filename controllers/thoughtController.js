const { User, Thought } = require("../models");

module.exports = {
  //*get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  //* Get a single Thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.ThoughtId })
      .then((thought) =>
        !Thought
          ? res.status(404).json({ message: "No Thought is found" })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //* Create a Thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought is found" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //*update a Thought info
  updateSingleThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.ThoughtId },
      { $set: req.body  },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !Thought
          ? res.status(404).json({ message: "No Thought with this id!" })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //*delete a Thought
  deleteSingleThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.ThoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : Thought.deleteMany({ _id: { $in: Thought.thoughts } })
      )
      .then(() => res.json({ message: 'Thought and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
//*add a friend
  addFriend(req,res){
    Thought.findOneAndUpdate(      
      { _id: req.params.ThoughtId },
      { $addToSet: {friends:req.params.friendId  }},
      { runValidators: true, new: true })
      .then((thought) =>
      !Thought
        ? res.status(404).json({ message: "No Thought with this id!" })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
  }

};
