const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: String,
  email: String,
  licenseNo: String,
  pinCode: String,
  address: String,
});

module.exports = mongoose.model("Doctor", doctorSchema);
