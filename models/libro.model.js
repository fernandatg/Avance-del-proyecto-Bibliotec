import mongoose, {Schema} from "mongoose";

const Libros = new Schema({
    nombre: String,
    autor: String,
    editorial: String,
    edicion: String,
    enlace: String,
      createdAt:{
        type: Date, default: Date.now
    }
});

const Libro = mongoose.model('alumno', Libros);

export default Libro;