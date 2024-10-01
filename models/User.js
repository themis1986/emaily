const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchemna = new Schema({
  googleId: String,
});

mongoose.model("users", userSchemna);
