const Medicine = require("../models/Medicine");

// GET all medicines
exports.getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new medicine
exports.addMedicine = async (req, res) => {
  try {
    const newMed = new Medicine(req.body);
    const savedMed = await newMed.save();
    res.status(201).json({
      success: true,
      message: "Medicine added successfully",
      medicine_id: savedMed._id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE medicine by ID
exports.updateMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMedicine = await Medicine.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedMedicine) {
      return res.status(404).json({
        success: false,
        message: "Medicine not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Medicine updated successfully",
      updatedMedicine,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE medicine by ID
exports.deleteMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMedicine = await Medicine.findByIdAndDelete(id);

    if (!deletedMedicine) {
      return res.status(404).json({
        success: false,
        message: "Medicine not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Medicine deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET expired medicines
exports.getExpiredMedicines = async (req, res) => {
  try {
    const today = new Date();
    const expiredMedicines = await Medicine.find({
      expiryDate: { $lt: today },
    });

    res.status(200).json(expiredMedicines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
