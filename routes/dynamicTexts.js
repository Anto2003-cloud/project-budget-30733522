const express = require('express');
const router = express.Router();
const DynamicText = require('../models/DynamicText');

// Crear un texto dinámico (Create)
router.post('/', async (req, res) => {
    try {
        const { section, key, value } = req.body;
        const dynamicText = await DynamicText.create({ section, key, value });
        res.status(201).json(dynamicText);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el texto dinámico' });
    }
});

// Obtener todos los textos dinámicos (Read)
router.get('/', async (req, res) => {
    try {
        const dynamicTexts = await DynamicText.findAll();
        res.status(200).json(dynamicTexts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los textos dinámicos' });
    }
});

// Actualizar un texto dinámico (Update)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { section, key, value } = req.body;
        const dynamicText = await DynamicText.findByPk(id);
        if (!dynamicText) {
            return res.status(404).json({ error: 'Texto dinámico no encontrado' });
        }
        await dynamicText.update({ section, key, value });
        res.status(200).json(dynamicText);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el texto dinámico' });
    }
});

// Eliminar un texto dinámico (Delete)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const dynamicText = await DynamicText.findByPk(id);
        if (!dynamicText) {
            return res.status(404).json({ error: 'Texto dinámico no encontrado' });
        }
        await dynamicText.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el texto dinámico' });
    }
});

module.exports = router;