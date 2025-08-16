// routes/contactRoutes.js
import express from 'express';
import { addContact, getContact, deleteContact, editContact } from '../controllers/contactController.js';

const router = express.Router();

// POST /contacts
router.post('/', addContact);
router.get('/', getContact);
router.delete('/:id', deleteContact);
router.put('/:id', editContact);

export default router;
