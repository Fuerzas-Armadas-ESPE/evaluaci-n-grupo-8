import { AulaService } from './aula.service';
import { AulaDTO } from './dto/aula.dto';
export declare class AulaController {
    private aulaService;
    constructor(aulaService: AulaService);
    getAulas(res: any): Promise<any>;
    createAula(newAula: AulaDTO): Promise<import("./interface/aula.interface").Aula>;
    findOne(idAula: any): Promise<import("./interface/aula.interface").Aula>;
    updateAula(aulaId: any, aulaData: AulaDTO): Promise<import("./interface/aula.interface").Aula>;
    deleteAula(aulaId: any): Promise<import("./interface/aula.interface").Aula>;
}
