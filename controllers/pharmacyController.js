const streamUpload = (buffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    stream.end(buffer);
  });
};

const PharmacyInfo = require("../models/PharmacyInfo");
const cloudinary = require("cloudinary").v2;

exports.getPharmacyInfo = async (req, res) => {
  try {
    const results = await PharmacyInfo.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.setPharmacyInfo = async (req, res) => {
  try {
    const {
      pharmacyName,
      pharmacistName,
      gstn,
      pan,
      storePhone,
      storeEmail,
      address,
      area,
      city,
      pincode,
    } = req.body;

    let logoUrl = null;
    let signatureUrl = null;

    const files = req.files;

    if (files.logo && files.logo[0]?.path) {
      logoUrl = files.logo[0].path;
    }
    if (files.signature && files.signature[0]?.path) {
      signatureUrl = files.signature[0].path;
    }

    const savedPharmacy = await PharmacyInfo.create({
      pharmacyName,
      pharmacistName,
      gstn,
      pan,
      storePhone,
      storeEmail,
      address,
      area,
      city,
      pincode,
      logoUrl,
      signatureUrl,
    });

    res.status(201).json({
      message: "Pharmacy info saved successfully.",
      pharmacyId: savedPharmacy._id,
    });
  } catch (err) {
    console.error("Error saving pharmacy info:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
