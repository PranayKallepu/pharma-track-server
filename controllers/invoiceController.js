const Invoice = require("../models/Invoice");

exports.getInvoices = async (req, res) => {
  try {
    const results = await Invoice.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addInvoice = async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    const result = await newInvoice.save();
    res.status(201).json({
      success: true,
      message: "Invoice created",
      invoiceId: result._id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
