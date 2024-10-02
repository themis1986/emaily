// keys.js figure out what set of credantials to retuen
if (process.env.NODE_ENV === "production") {
  //return prod set of keys
  module.exports = require("./prod");
} else {
  //return dev keys
  module.exports = require("./dev");
}
