// Importa la capa de persistencia (repositorio) 
import SuperheroesRepository from '../repository/superheroesRepository.mjs';

// Instancia el repositorio para manejar los superhéroes 
const repository = new SuperheroesRepository();

// Función para obtener un superhéroe por ID 
export function obtenerSuperheroesPorId(id) { 
    const superheroes = repository.obtenerTodos();
    return superheroes.find(hero => hero.id === id);
}

// Función para buscar superhéroes por atributo 
export function buscarSuperheroesPorAtributo(atributo, valor) { 
    const superheroes = repository.obtenerTodos(); 
    console.log(`Buscando por atributo: ${atributo}, valor: ${valor}`);
    
    return superheroes.filter(hero => {
        console.log(`Verificando superhéroe:`, hero);
        return String(hero[atributo]).toLowerCase().includes(valor.toLowerCase());
    });
}



// Función para obtener superhéroes mayores de 30 años con ciertas condiciones 
export function obtenerSuperheroesMayoresDe30() { 
    const superheroes = repository.obtenerTodos(); 
    return superheroes.filter(hero => 
        hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >= 2
    ); 
}

