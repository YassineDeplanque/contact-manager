// routes/contactRoutes.js
import express from 'express';
import { addContact, getContact, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

// POST /contacts
router.post('/', addContact);
router.get('/', getContact);
router.delete('/:id', deleteContact);

export default router;
