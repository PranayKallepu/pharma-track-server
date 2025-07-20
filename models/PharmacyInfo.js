const mongoose = require("mongoose");

const pharmacyInfoSchema = new mongoose.Schema({
  pharmacyName: { type: String, required: true },
  pharmacistName: String,
  gstn: String,
  pan: String,
  phone: String,
  email: String,
  address: String,
  area: String,
  city: String,
  pincode: String,
  signatureUrl: String, // Cloudinary URL
  logoUrl: String, // Cloudinary URL
});

module.exports = mongoose.model("PharmacyInfo", pharmacyInfoSchema);
