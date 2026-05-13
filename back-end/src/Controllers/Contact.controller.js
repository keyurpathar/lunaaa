const contactModel = require("../Models/Contact.model");

const addContact = async (req, res) => {

    try {


        const { number } = req.body;

        if (!number) return res.status(404).json({
            success: true,
            message: "number not found",
            data: null
        })

        const isExist = await contactModel.findOne({ number });

        // console.log(isExist)

        if (isExist) return res.status(400).json({
            success: false,
            message: "number already exist",
            data: number
        })

        const addNumber = await contactModel.create({ number });

        if (!addNumber) return res.status(400).json({
            success: false,
            message: "number not added",
            data: null
        })

        res.status(201).json({
            success: true,
            message: "contact number added",
            data: addNumber
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        })
    }


}


const getContact = async (req, res) => {

    try {


        const contacts = await contactModel.find();

        if (!contacts) res.status(400).json({
            success: false,
            message: "contact not found",
            data: null
        })

        res.status(200).json({
            success: true,
            message: "contacts fetched sucessfully",
            data: contacts
        })

    }

    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        })
    }
}

const deleteContact = async (req, res) => {

    try {

        const { id } = req.params;

        const deletedContact = await contactModel.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({
                success: false,
                message: "number not found",
                data: null
            });
        }

        // console.log(deletedContact)

        return res.status(200).json({
            success: true,
            message: "contact deleted successfully",
            data: deletedContact
        });

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        })
    }

}

const updateContact = async (req, res) => {

    try {
        const { id } = req.params;
        const { number } = req.body;

        if (!number) return res.status(400).json({
            success: false,
            message: " please provide number ",
            data: null
        })

        const updatedContact = await contactModel.findByIdAndUpdate(id, { number }, { new: true });

        if (!updatedContact) {
            return res.status(400).json({
                success: false,
                message: "number not found",
                data: null
            });
        }

        res.status(200).json({
            success: true,
            message: "contact updated successfully",
            data: updatedContact
        });

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        })
    }
}

module.exports = { addContact, getContact, deleteContact, updateContact }