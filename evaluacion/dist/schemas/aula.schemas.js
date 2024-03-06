"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AulaSchema = new mongoose_1.Schema({
    nrc: {
        type: String,
        require: true
    },
    nombre_profesor: {
        type: String,
        require: true
    },
    tipo_de_aula: {
        type: String,
        require: true
    },
    ubicacion: {
        type: String,
        require: true
    }
});
//# sourceMappingURL=aula.schemas.js.map