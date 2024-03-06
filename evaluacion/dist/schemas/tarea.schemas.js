"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TareaSchema = new mongoose_1.Schema({
    nombre_materia: {
        type: String,
        require: true
    },
    nombre_profesor: {
        type: String,
        require: true
    },
    nrc: {
        type: String,
        require: true
    },
    fecha_entrega: {
        type: String,
        require: true
    }
});
//# sourceMappingURL=tarea.schemas.js.map