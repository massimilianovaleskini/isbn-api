const multer = require('multer');
const fs = require('fs');
const path = require('path');
var isbn = require('node-isbn');

const getISBN = (req, res) => {
    isbn.resolve(req.params.isbn, function (err, book) {
        if (err) {
            res.json(404);
        } else {
            res.json(book);
        }
    });
};

module.exports = {
    getISBN
};