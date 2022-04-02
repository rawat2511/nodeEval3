const express = require('express');
const Book = require('../models/book.model');

const router = express.Router();
 
router.post('/', async (req, res) => {
    const createdBook = await Book.create(req.body);
    res.status(201).json(createdBook);
});


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.status(200).json(book);
} )

router.get('/', async (req, res) => {
    const books = await Book.find({});
    res.status(200).json(books);
} )

router.patch('/:bookId/update', async(req, res ) => {
    const bookId = req.params.bookId;
    const updatedBook = await Book.findByIdAndUpdate(
        bookId, 
        req.body, 
        {new: true}
    );
    res.status(200).json(updatedBook);
})

router.delete('/:bookId', async (req, res) => {
    const bookId = req.params.bookId;
    const deletedBook = await Book.findByIdAndDelete(bookId);
    res.status(200).json(deletedBook);
})


module.exports = router;