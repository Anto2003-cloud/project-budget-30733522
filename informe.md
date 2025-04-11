# Informe del Proyecto: Project Budget

## Curso: Desarrollo de Aplicaciones II
## Autor: Antonio (Anto2003-cloud)

### Descripción del Proyecto
Project Budget es una aplicación web diseñada para gestionar presupuestos. Incluye una API REST para manejar datos (comentarios, contactos, y textos dinámicos) y un frontend integrado con páginas HTML para interactuar con la API. El proyecto fue desarrollado como parte del curso de Desarrollo de Aplicaciones II.

### Funcionalidades Implementadas
- **API REST**: Endpoints CRUD para:
  - Comentarios (`/api/comments`): Crear, leer, actualizar y eliminar comentarios.
  - Contactos (`/api/contacts`): Crear, leer, actualizar y eliminar mensajes de contacto.
  - Textos dinámicos (`/api/dynamic-texts`): Crear, leer, actualizar y eliminar textos dinámicos.
- **Base de datos**: Uso de MySQL con Sequelize para almacenar datos persistentes.
- **Frontend**: Páginas HTML para:
  - Inicio (`/`): Permite enviar comentarios y mostrar textos dinámicos.
  - Acerca de (`/about`): Información sobre el proyecto.
  - Servicios (`/services`): Lista de servicios y formulario para comentarios.
  - Contacto (`/contact`): Formulario para enviar mensajes de contacto.
- **Mejoras visuales**: Estilos modernos con CSS y un navbar para facilitar la navegación.
- **Documentación**:
  - `README.md`: Instrucciones de instalación y uso.
  - `api-docs.md`: Documentación de los endpoints de la API.

### Tecnologías Utilizadas
- **Backend**: Node.js, Express, Sequelize, MySQL.
- **Frontend**: HTML, CSS, JavaScript.
- **Control de versiones**: Git y GitHub.

### Instrucciones de Ejecución
Las instrucciones detalladas están en el archivo `README.md`. En resumen:
1. Clona el repositorio: `git clone https://github.com/Anto2003-cloud/project-budget-3073355222.git`
2. Instala las dependencias: `npm install`
3. Configura la base de datos en `config/database.js`.
4. Ejecuta el script de seed: `node seeders/seed.js`
5. Inicia el servidor: `npm run start`
6. Abre `http://localhost:3000` en tu navegador.

### Desafíos y Soluciones
- **Problema**: Error al hacer `git pull` debido a "unrelated histories".
  - **Solución**: Forzamos el push con `git push origin main --force` para sobrescribir el remoto con la historia local.
- **Problema**: Los cambios en los archivos del frontend no se detectaban en Git.
  - **Solución**: Verificamos que los archivos se guardaran correctamente y rehicimos los cambios para crear el commit "Mejorar estilos del frontend y agregar navbar".

### Conclusión
Este proyecto me permitió aplicar los conceptos aprendidos en el curso, como el desarrollo de una API REST, la integración con una base de datos, y la creación de un frontend funcional. A pesar de algunos desafíos con Git, logré completar el proyecto con todas las funcionalidades requeridas y mejoras adicionales.

### Enlace al Repositorio
[https://github.com/Anto2003-cloud/project-budget-3073355222](https://github.com/Anto2003-cloud/project-budget-3073355222)