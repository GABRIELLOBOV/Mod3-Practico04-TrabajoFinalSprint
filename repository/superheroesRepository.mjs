import fs from 'fs'; 
import path from 'path'; 
import { fileURLToPath } from 'url'; 

import SuperheroesDataSource from './superheroesDataSource.mjs'; 
import Superheroe from '../models/superheroes.mjs'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
const filePath = path.join(__dirname, '../superheroes.txt'); 

export default class SuperheroesRepository extends SuperheroesDataSource { 
    constructor() { 
        super();
        this.filePath = filePath;
    }

    obtenerTodos() { 
        try { 
            const data = fs.readFileSync(this.filePath, 'utf-8'); 
            const superheroes = JSON.parse(data); 
            console.log(`Datos cargados:`, superheroes);  
            return superheroes;
        } catch (error) { 
            console.error('Error al leer el archivo:', error); 
            return []; 
        } 
    }
    

    guardar(superheroes) { 
        try { 
            const data = JSON.stringify(superheroes, null, 2); 
            fs.writeFileSync(this.filePath, data, 'utf-8'); 
        } catch (error) { 
            console.error('Error al guardar los superhéroes:', error); 
        } 
    }

    eliminar(id) { 
        try { 
            const superheroes = this.obtenerTodos(); 
            const superheroesActualizados = superheroes.filter(hero => hero.id !== id); 
            this.guardar(superheroesActualizados); 
        } catch (error) { 
            console.error('Error al eliminar el superhéroe:', error); 
        } 
    } 
}
