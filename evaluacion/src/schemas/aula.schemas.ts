import {Schema} from "mongoose";
export const AulaSchema = new Schema({
    nrc:{
        type:String,
        require:true
    },
    nombre_profesor:{
        type:String,
        require:true
    },
    tipo_de_aula:{
        type:String,
        require:true
    },
    ubicacion:{
        type:String,
        require:true
    }
})