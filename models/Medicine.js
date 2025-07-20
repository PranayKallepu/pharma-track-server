const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  medicineName: String,
  manufacturer: String,
  batchNo: String,
  expiryDate: String,
  quantity: Number,
  price: Number,
  addedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Medicine", medicineSchema);
