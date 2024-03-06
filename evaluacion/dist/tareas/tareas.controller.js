"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareasController = void 0;
const common_1 = require("@nestjs/common");
const tareas_service_1 = require("./tareas.service");
const tarea_dto_1 = require("./dto/tarea.dto");
let TareasController = class TareasController {
    constructor(tareasService) {
        this.tareasService = tareasService;
    }
    async getTareas(res) {
        const aula = await this.tareasService.getTareas();
        return res.status(common_1.HttpStatus.OK).json({
            aula,
        });
    }
    async createAula(newAula) {
        const tareas = this.tareasService.create(newAula);
        return tareas;
    }
    async findOne(idAula) {
        const tareas = await this.tareasService.findOne(idAula);
        return tareas;
    }
    async updateAula(aulaId, aulaData) {
        const tareas = await this.tareasService.update(aulaId, aulaData);
        return tareas;
    }
    async deleteAula(aulaId) {
        const tareas = await this.tareasService.delete(aulaId);
        return tareas;
    }
};
exports.TareasController = TareasController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "getTareas", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tarea_dto_1.tareaDTO]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "createAula", null);
__decorate([
    (0, common_1.Get)('/:aulaId'),
    __param(0, (0, common_1.Param)('aulaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/:aulaId'),
    __param(0, (0, common_1.Param)('aulaId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof AulaDTO !== "undefined" && AulaDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "updateAula", null);
__decorate([
    (0, common_1.Delete)('/:aulaId'),
    __param(0, (0, common_1.Param)('aulaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "deleteAula", null);
exports.TareasController = TareasController = __decorate([
    (0, common_1.Controller)('tareas'),
    __metadata("design:paramtypes", [tareas_service_1.TareasService])
], TareasController);
//# sourceMappingURL=tareas.controller.js.map