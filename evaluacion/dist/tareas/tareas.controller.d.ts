import { AulaService } from './aula.service';
import { AulaDTO } from './dto/aula.dto';
export declare class AulaController {
    private aulaService;
    constructor(aulaService: AulaService);
    getAulas(res: any): Promise<any>;
    createAula(newAula: AulaDTO): Promise<any>;
    findOne(idAula: any): Promise<any>;
    updateAula(aulaId: any, aulaData: AulaDTO): Promise<any>;
    deleteAula(aulaId: any): Promise<any>;
}
export declare class TareasController {
}
