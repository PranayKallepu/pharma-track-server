const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  medicineId: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine" },
  quantity: Number,
  discount: Number,
  amount: Number,
  billingDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Sale", saleSchema);
