const mongoose = require("mongoose");

const createBook = new mongoose.Schema({
  name: {
    type: String,
    require,
  },
  price: {
    type: Number,
    require,
  },
  author: {
    type: String,
    require,
  },
});

const bookSchema = mongoose.model("book", createBook);

module.exports = bookSchema;
