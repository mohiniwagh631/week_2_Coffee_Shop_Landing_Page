const contact = (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {

        return res.status(400).json({
            message: "Please fill all fields"
        });

    }

    res.status(200).json({
        message: "Message Sent Successfully"
    });

};

module.exports = contact;