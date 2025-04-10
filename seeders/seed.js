const sequelize = require('../config/database');
const Comment = require('../models/Comment');
const Contact = require('../models/Contact');
const DynamicText = require('../models/DynamicText');

const seed = async () => {
    try {
        // Sincronizar la base de datos (asegurarse de que las tablas existan)
        await sequelize.sync({ force: true });

        // Insertar datos iniciales en la tabla comments
        await Comment.bulkCreate([
            { usuario: 'Juan Pérez', calificacion: 5, descripcion: 'Excelente servicio, muy recomendado.' },
            { usuario: 'María Gómez', calificacion: 4, descripcion: 'Buena experiencia, pero puede mejorar.' }
        ]);

        // Insertar datos iniciales en la tabla contacts
        await Contact.bulkCreate([
            { nombre: 'Ana López', email: 'ana.lopez@example.com', mensaje: 'Quiero más información sobre los servicios.' },
            { nombre: 'Carlos Ruiz', email: 'carlos.ruiz@example.com', mensaje: '¿Cuándo estarán disponibles las nuevas funcionalidades?' }
        ]);

        // Insertar datos iniciales en la tabla dynamic_texts
        await DynamicText.bulkCreate([
            { section: 'home', key: 'title', value: 'Bienvenidos a Project Budget' },
            { section: 'home', key: 'subtitle', value: 'Gestiona tus finanzas de manera eficiente' },
            { section: 'about', key: 'description', value: 'Somos una empresa dedicada a ayudarte a organizar tu presupuesto.' }
        ]);

        console.log('Datos iniciales insertados correctamente.');
    } catch (error) {
        console.error('Error al insertar datos iniciales:', error);
    } finally {
        await sequelize.close();
    }
};

seed();