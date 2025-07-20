const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  PharmacyInfoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PharmacyInfo",
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  unitPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  taxAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
  },
  payment: {
    type: String,
    enum: ["cash", "online", "both"],
    required: true,
  },
  InvoiceDate: {
    type: Date,
    default: Date.now,
  },
});

invoiceSchema.pre("save", function (next) {
  if (this.quantity && this.unitPrice) {
    const baseAmount = this.quantity * this.unitPrice;
    const discounted = baseAmount - (this.discount || 0);
    this.totalAmount = discounted + (this.taxAmount || 0);
  }
  next();
});

module.exports = mongoose.model("Invoice", invoiceSchema);
