const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Crear un contacto (Create)
router.post('/', async (req, res) => {
    try {
        const { nombre, email, mensaje } = req.body;
        const contact = await Contact.create({ nombre, email, mensaje });
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el contacto' });
    }
});

// Obtener todos los contactos (Read)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los contactos' });
    }
});

// Actualizar un contacto (Update)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, mensaje } = req.body;
        const contact = await Contact.findByPk(id);
        if (!contact) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        await contact.update({ nombre, email, mensaje });
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el contacto' });
    }
});

// Eliminar un contacto (Delete)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findByPk(id);
        if (!contact) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        await contact.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el contacto' });
    }
});

module.exports = router;