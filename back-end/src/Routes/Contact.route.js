const express = require('express');
const {addContact , getContact, deleteContact, updateContact} = require('../Controllers/Contact.controller');
const contactRules = require('../Middlewares/Contact.middleware');
const ContactRouter = express.Router();


ContactRouter.get('/' , getContact) 
ContactRouter.post('/addContact' , contactRules ,  addContact )
ContactRouter.delete('/deleteContact/:id' , deleteContact)
ContactRouter.patch('/updateContact/:id' , contactRules , updateContact)

module.exports = ContactRouter