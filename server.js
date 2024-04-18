const express = require("express");
const cors = require("cors");
const addBooksDetails = require("./src/crud/createBook.js");
const readBook = require("./src/crud/readBook.js");
const deleteBook = require("./src/crud/deleteBook.js");
const updateBookDetails = require("./src/crud/updateBook.js");

const app = express();
app.use(
  cors({
    allowedHeaders: "*",
    methods: "POST",
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(addBooksDetails);
app.use(readBook);
app.use(deleteBook);
app.use(updateBookDetails);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server is running on ${port}`));
