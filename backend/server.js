import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactsRoutes from './routes/contactRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Middleware JSON
app.use(express.json());

// Routes
app.use('/contacts', contactsRoutes);

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
