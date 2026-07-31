const Contact = require("../models/Contact");

// Create Contact
const saveContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save();

    res.status(201).json({
      message: "Message Sent Successfully",
      contact,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Contacts
const getContacts = async (req, res) => {
  try {

    const contacts = await Contact.find();

    res.status(200).json(contacts);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Update Contact
const updateContact = async (req, res) => {

  try {

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );

    res.status(200).json({
      message: "Contact Updated Successfully",
      contact,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// Delete Contact
const deleteContact = async (req, res) => {

  try {

    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Contact Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  saveContact,
  getContacts,
  updateContact,
  deleteContact,
};