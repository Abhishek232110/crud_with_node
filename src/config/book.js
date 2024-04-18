const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bookDetails", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
