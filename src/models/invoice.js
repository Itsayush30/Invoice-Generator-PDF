const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
      unique: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    total: {
      type: Number,
    },
  },
  { timestamps: true }
);

// Define a pre-save middleware to calculate the total
invoiceSchema.pre("save", function (next) {
  this.total = this.qty * this.rate;
  next();
});

const Invoice = mongoose.model("invoice", invoiceSchema); //creating model
module.exports = Invoice;
