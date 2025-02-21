// Definimos una clase abstracta que actúa como interfaz para la persistencia de datos 

export default class SuperheroesDataSource { 
    // Método abstracto para obtener todos los superhéroes 
    obtenerTodos() { 
    
    throw new Error('Este método debe ser implementado por la subclase'); 
     } 
    // Método abstracto para guardar todos los superheroes
    guardar (superheroes) { 
        throw new Error('Este método debe ser implementado por la subclase'); 
        } 
    // Método abstracto para eliminar un superheroe por su ID 
    eliminar(id) { 
        throw new Error('Este método debe ser implementado por la subclase'); 
    }

}