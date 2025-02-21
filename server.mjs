import express from 'express'; 
import { 
    obtenerSuperheroesPorIdController, 
    buscarSuperheroesPorAtributoController, 
    obtenerSuperheroesMayoresDe30Controller 
} from './controllers/superheroesController.mjs'; 
        
const app = express(); 
const PORT = 3005; 

app.use(express.json()); 

// Rutas 
app.get('/superheroes/id/:id', obtenerSuperheroesPorIdController); 
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller); 

// Iniciar servidor
app.listen(PORT, () => { 
    console.log(`Servidor corriendo en el puerto: ${PORT}`);  
});


/* para hacer las consultas en el explorador:

http://localhost:3005/superheroes/id/(1,2,3,etc)
http://localhost:3005/superheroes/atributo/habilidadEspecial/Hechizos%20poderosos
http://localhost:3005/superheroes/edad/mayorA30
http://localhost:3005/superheroes/atributo/habilidadEspecial/Artes%20Marciales
http://localhost:3005/superheroes/atributo/nombreSuperheroe/Spiderman

*/
