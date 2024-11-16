const express = require('express');

const router = express.Router();

const {
    getAllNotes,
    createNote,
    deleteNote,
    updateNote,
    searchNotes,
} = require('../controllers/noteController');

router.get('/', getAllNotes);
router.post('/', createNote);
router.delete('/:id', deleteNote);
router.put('/:id', updateNote);
router.get('/search', searchNotes);

module.exports = router;