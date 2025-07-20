const Doctor = require("../models/Doctor");

// GET all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD doctor
exports.addDoctor = async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.status(201).json({
      success: true,
      message: "Doctor added successfully",
      doctor_id: savedDoctor._id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
