"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let TareasService = class TareasService {
};
exports.TareasService = TareasService;
exports.TareasService = TareasService = __decorate([
    (0, common_1.Injectable)()
], TareasService);
constructor((), tareaModel, (mongoose_1.Model));
{ }
async;
create(createAulaDto, AulaDTO);
Promise < Aula > {
    const: aula = new this.aulaModel(createAulaDto),
    const: createdAula = await aula.save(),
    return: createdAula
};
async;
getAulas();
Promise < Aula[] > {
    const: users = await this.aulaModel.find(),
    return: users
};
async;
findOne(id, string);
Promise < tarea_interface_1.Tarea | undefined > {
    const: aula = await this.aulaModel.findById(id).exec(),
    return: aula
};
async;
update(id, string, updateAulaDto, AulaDTO);
Promise < Aula | undefined > {
    const: updatedAula = await this.aulaModel.findByIdAndUpdate(id, updateAulaDto, {
        new: true,
    }),
    return: updatedAula
};
async;
delete (id);
string;
Promise < tarea_interface_1.Tarea | undefined > {
    const: deletedAula = await this.aulaModel.findByIdAndDelete(id),
    return: deletedAula
};
//# sourceMappingURL=tarea.service.js.map