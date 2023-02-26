const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteSingleThought,
  updateSingleThought
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts)
.post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.post(updateSingleThought)
.delete(deleteSingleThought);;

module.exports = router;
