const Sale = require("../models/Sale");

// GET all sales
exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD new sale
exports.addSale = async (req, res) => {
  try {
    const newSale = new Sale(req.body);
    const savedSale = await newSale.save();
    res.status(201).json({
      success: true,
      message: "Sale recorded successfully",
      sale_id: savedSale._id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
