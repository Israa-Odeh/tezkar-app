const Note = require('../models/note');

exports.getAllNotes = async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const totalNotes = await Note.countDocuments();

        let notes;

        if (!page || !limit) {
            notes = await Note.find();
        }
        else {
            notes = await Note.find()
                .skip((page - 1) * limit)
                .limit(limit);
        }

        res.status(200).json({
            totalNotes,
            totalPages: limit ? Math.ceil(totalNotes / limit) : 1,
            currentPage: limit ? page || 1 : 1,
            notes,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createNote = async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).json(note);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteNote = async (req, res) => {
    try {
        const result = await Note.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'The note is not found' });
        }
        res.status(200).json({ message: 'The note is deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateNote = async (req, res) => {
    try {
        const result = await Note.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'The note is not found' });
        }

        res.status(200).json({ message: 'The note is updated successfully' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.searchNotes = async (req, res) => {
    const { query } = req.query ?? {};
    try {
        const notes = await Note.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { content: { $regex: query, $options: 'i' } }
            ]
        });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}