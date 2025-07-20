const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const doctorController = require("../controllers/doctorController");
const salesController = require("../controllers/salesController");
const invoiceController = require("../controllers/invoiceController");
const pharmacyController = require("../controllers/pharmacyController");
const customerController = require("../controllers/customerController");
const medicineController = require("../controllers/medicineController");

//_________________API for DOCTORS_________________
router.get("/doctors", doctorController.getDoctors);
router.post("/doctors", doctorController.addDoctor);

//_________________API for SALES_________________
router.get("/sales", salesController.getSales);
router.post("/sales", salesController.addSale);

//_________________API for INVOICES_________________
router.get("/invoices", invoiceController.getInvoices);
router.post("/invoices", invoiceController.addInvoice);

//_________________API for PHARMACY_________________
router.get("/pharmacy-info", pharmacyController.getPharmacyInfo);
router.post(
  "/pharmacy-info",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "signature", maxCount: 1 },
  ]),
  pharmacyController.setPharmacyInfo
);

// _________________API for CUSTOMERS_________________
router.get("/customers", customerController.getCustomers);
router.post("/customers", customerController.addCustomer);
router.put("/customers/:id", customerController.updateCustomer);
router.delete("/customers/:id", customerController.deleteCustomer);
router.get("/customers/:id", customerController.getCustomerById);

//_________________API for MEDICINES_________________
router.get("/medicines", medicineController.getMedicines);
router.post("/medicines", medicineController.addMedicine);
router.put("/medicines/:id", medicineController.updateMedicine);
router.delete("/medicines/:id", medicineController.deleteMedicine);
router.get("/medicines/expired", medicineController.getExpiredMedicines);

module.exports = router;
