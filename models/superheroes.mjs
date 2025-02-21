export default class Superheroe { 
    constructor(id, nombre, descripcion, completado = false) { 
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.completado = completado;
    }

    completar() { 
        this.completado = true;
    }

    validar() { 
        if (!this.nombre || this.nombre.trim() === '') { 
            throw new Error('El nombre del superhéroe es obligatorio.'); 
        } 
    }
}
