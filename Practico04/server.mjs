import express from 'express'; // Importamos el framework Express 
// Importamos los controladores 
import {
        listarTareasController, 
        listarTareasCompletadasController, 
        crearTareaController, 
        completarTareaController, 
        eliminarTareaController } from './controllers/tareaController.mjs'; 

const app = express(); // Inicializamos una aplicación de Express 
const PORT = 3000; // Definimos el puerto en el que escuchará el servidor 

// Middleware para permitir el manejo de solicitudes con cuerpo en formato JSON
 app.use(express.json()); 
// Rutas 
    // Ruta para obtener todas las tareas
 app.get('/tareas', listarTareasController); 
    // Ruta para obtener las tareas completadas 
app.get('/tareas/completadas', listarTareasCompletadasController); 
    // Ruta para crear una nueva tarea 
app.post('/tareas', crearTareaController); 
    // Ruta para marcar una tarea como completada 
app.put('/tareas/:id/completar', completarTareaController); 
    // Ruta para eliminar una tarea 
app.delete('/tareas/:id', eliminarTareaController); 
    // Iniciar el servidor 
app.listen(PORT, () => { 
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
}); 


/* import express from 'express'; 
const app = express(); 
const PORT = 3000; 

// Ruta GET con parámetro de ruta 
// Solicitud: http://localhost:3000/user/123 
app.get('/user/:id', (req, res) => { 

const userId = req.params.id; 
console.log(`ID del usuario recibido: ${userId}`); 
res.send(`Perfil del usuario con ID: ${userId}`); 
});
app.listen(PORT, () => {  
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
}); 

// Ruta GET con parámetro de consulta 
// Solicitud: http://localhost:3000/profile?edad=30 
app.get('/profile', (req, res) => { 

const edad = req.query.edad; 
console.log(`Edad recibida: ${edad}`); 
res.send(`Edad del perfil: ${edad}`); 
});
app.listen(PORT, () => { 
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
}); */