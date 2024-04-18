const express = require("express");
require("../../config/cake");
const pastrySchema = require("../../model/pastry");
const cloudinary = require("../../utils/cloudinary");

const UploadPastry = express();
UploadPastry.post("/api/upload/pastry", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const result = await cloudinary.uploader.upload(fileStr);
    const imageUrl = result.secure_url;

    // Create a new post document with the image URL
    const newCake = new pastrySchema({
      name: req.body.name,
      price: req.body.price,
      imageUrl: imageUrl,
      weight: req.body.weight,
      flavour: req.body.flavour,
    });
    await newCake.save();
    // console.log(newCake);
    res.status(200).json({ mess: "done" });
    // console.log(fileStr);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ mess: "failed" });
  }
});

module.exports = UploadPastry;