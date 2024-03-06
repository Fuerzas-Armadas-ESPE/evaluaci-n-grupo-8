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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaController = void 0;
const common_1 = require("@nestjs/common");
const aula_service_1 = require("./aula.service");
const aula_dto_1 = require("./dto/aula.dto");
let AulaController = class AulaController {
    constructor(aulaService) {
        this.aulaService = aulaService;
    }
    async getAulas(res) {
        const aula = await this.aulaService.getAulas();
        return res.status(common_1.HttpStatus.OK).json({
            aula,
        });
    }
    async createAula(newAula) {
        const aula = this.aulaService.create(newAula);
        return aula;
    }
    async findOne(idAula) {
        const aula = await this.aulaService.findOne(idAula);
        return aula;
    }
    async updateAula(aulaId, aulaData) {
        const aula = await this.aulaService.update(aulaId, aulaData);
        return aula;
    }
    async deleteAula(aulaId) {
        const aula = await this.aulaService.delete(aulaId);
        return aula;
    }
};
exports.AulaController = AulaController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AulaController.prototype, "getAulas", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aula_dto_1.AulaDTO]),
    __metadata("design:returntype", Promise)
], AulaController.prototype, "createAula", null);
__decorate([
    (0, common_1.Get)('/:aulaId'),
    __param(0, (0, common_1.Param)('aulaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AulaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/:aulaId'),
    __param(0, (0, common_1.Param)('aulaId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, aula_dto_1.AulaDTO]),
    __metadata("design:returntype", Promise)
], AulaController.prototype, "updateAula", null);
__decorate([
    (0, common_1.Delete)('/:aulaId'),
    __param(0, (0, common_1.Param)('aulaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AulaController.prototype, "deleteAula", null);
exports.AulaController = AulaController = __decorate([
    (0, common_1.Controller)('aula'),
    __metadata("design:paramtypes", [aula_service_1.AulaService])
], AulaController);
//# sourceMappingURL=aula.controller.js.map