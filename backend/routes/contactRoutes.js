// routes/contactRoutes.js
import express from 'express';
import { addContact, getContact } from '../controllers/contactController.js';

const router = express.Router();

// POST /contacts
router.post('/', addContact);
router.get('/', getContact);

export default router;
