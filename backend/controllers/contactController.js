// controllers/contactController.js
import { connection } from '../config/db.js';

// Ajouter un contact
export const addContact = async (req, res) => {
    const { nom, prenom, email } = req.body;

    // Vérification des champs obligatoires
    if (!nom || !prenom || !email) {
        return res.status(400).json({ success: false, message: "Tous les champs sont requis" });
    }

    try {
        const db = await connection();
        const query = 'INSERT INTO contacts (nom, prenom, email) VALUES (?, ?, ?)';
        const [result] = await db.execute(query, [nom, prenom, email]);

        res.status(201).json({ 
            success: true, 
            message: "Contact ajouté", 
            contactId: result.insertId 
        });
    } catch (error) {
        console.error("Erreur lors de l'ajout :", error);
        res.status(500).json({ success: false, message: "Erreur serveur" });
    }
};
