const express = require("express");
const icecreamSchema = require("../model/createBookModel");
const deleteBook = express();

deleteBook.delete("/api/deletebook/:_id", async (req, res) => {
  let { _id } = req.params;
  if (_id) {
    let data = await icecreamSchema.findOne(req.body).deleteOne();
    res.send(data);
    console.log(data);
  } else {
    res.send("Enter correct details");
  }
});

module.exports = deleteBook;
