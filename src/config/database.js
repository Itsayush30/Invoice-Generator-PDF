const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://localhost/Invoice-Generator");
};

module.exports = connect;