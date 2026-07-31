const express = require("express");

const router = express.Router();

const {
  saveContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// Create
router.post("/contact", saveContact);

// Read
router.get("/contact", getContacts);

// Update
router.put("/contact/:id", updateContact);

// Delete
router.delete("/contact/:id", deleteContact);

module.exports = router;