import mongoose, {Schema} from "mongoose";

const Libros = new Schema({
    nombre: { type: String, maxlenght: 50, required: true },
    autor: { type: String, maxlenght:50, required: true },
    edicion: String,
    editorial: String,
      createdAt:{
        type: Date, default: Date.now
    }
});

const Libro= mongoose.model('alumno', Libros);

export default Libros;