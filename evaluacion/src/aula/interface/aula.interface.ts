import {Document} from "mongoose";

export interface Aula extends Document{
    nrc:string;
    nombre_profesor:string;
    tipo_de_aula:string;
    ubicacion: string;
}