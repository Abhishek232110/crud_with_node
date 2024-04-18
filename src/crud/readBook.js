const express = require("express");
const icecreamSchema = require("../model/createBookModel");
const readBook = express();

readBook.get("/api/getbooks", async (req, res) => {
  const result = await icecreamSchema.find();
  res.send(result);
  // console.log(result);
});

module.exports = readBook;
