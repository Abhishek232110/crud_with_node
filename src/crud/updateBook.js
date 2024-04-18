const express = require("express");
const updateBook = require("../model/createBookModel");
const updateBookDetails = express();

updateBookDetails.put("/api/updatebook/:_id", async (req, res) => {
  const { _id } = req.params;
  const filter = { _id: _id };
  const updateDocument = {
    $set: {
      name: req.body.name,
      author: req.body.author,
      price: req.body.price,
    },
  };
  const result = await updateBook.updateOne(filter, updateDocument);
  res.send(result);
});

module.exports = updateBookDetails;
