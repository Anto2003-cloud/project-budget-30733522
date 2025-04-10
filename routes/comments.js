const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Crear un comentario (Create)
router.post('/', async (req, res) => {
    try {
        const { usuario, calificacion, descripcion } = req.body;
        const comment = await Comment.create({ usuario, calificacion, descripcion });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el comentario' });
    }
});

// Obtener todos los comentarios (Read)
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los comentarios' });
    }
});

// Actualizar un comentario (Update)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario, calificacion, descripcion } = req.body;
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }
        await comment.update({ usuario, calificacion, descripcion });
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el comentario' });
    }
});

// Eliminar un comentario (Delete)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }
        await comment.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el comentario' });
    }
});

module.exports = router;