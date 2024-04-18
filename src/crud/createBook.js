const express = require("express");
require("../config/book");
const bookSchema = require("../model/createBookModel");
const addBooksDetails = express();

addBooksDetails.post("/api/createbooks", async (req, res) => {
  let dataBase = new bookSchema(req.body);
  let details = await dataBase.save(req.body);
  console.log(details);
  res.send(details);
});
module.exports = addBooksDetails;
