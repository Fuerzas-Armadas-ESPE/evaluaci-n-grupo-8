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
exports.AulaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AulaService = class AulaService {
    constructor(aulaModel) {
        this.aulaModel = aulaModel;
    }
    async create(createAulaDto) {
        const aula = new this.aulaModel(createAulaDto);
        const createdAula = await aula.save();
        return createdAula;
    }
    async getAulas() {
        const users = await this.aulaModel.find();
        return users;
    }
    async findOne(id) {
        const aula = await this.aulaModel.findById(id).exec();
        return aula;
    }
    async update(id, updateAulaDto) {
        const updatedAula = await this.aulaModel.findByIdAndUpdate(id, updateAulaDto, {
            new: true,
        });
        return updatedAula;
    }
    async delete(id) {
        const deletedAula = await this.aulaModel.findByIdAndDelete(id);
        return deletedAula;
    }
};
exports.AulaService = AulaService;
exports.AulaService = AulaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Aula')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AulaService);
//# sourceMappingURL=aula.service.js.map