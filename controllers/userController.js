const { User, Thought } = require("../models");

module.exports = {
  //*get all users
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //* Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user is found" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //* Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user is found" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //*update a user info
  updateSingleUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body  },
      { runValidators: true, new: true }
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: "No application with this id!" })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
};
