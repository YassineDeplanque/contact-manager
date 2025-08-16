// routes/contactRoutes.js
import express from 'express';
import { addContact } from '../controllers/contactController.js';

const router = express.Router();

// POST /contacts
router.post('/', addContact);

export default router;
