import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Calbup } from "./calbup.entity";
import { CreateCabupDto } from "./dto/create-cabup.dto";

@EntityRepository(Calbup)
export class CalbupRepository extends Repository<Calbup> {
    logger: any;
    async createCabup(
        createCabupDto: CreateCabupDto
    ): Promise<Calbup> {
        const { namaCabup, namaWaCabup, visi, misi } = createCabupDto;

        const calbup = new Calbup();
        calbup.nama_bup = namaCabup;
        calbup.nama_wabup = namaWaCabup;
        calbup.visi = visi;
        calbup.misi = misi;

        try {
            await calbup.save();
        } catch (error) {
            // this.logger.error(`Failed to create task for user "${user.username}". DATA: ${JSON.stringify(createTaskDto)}. `, error.stack)
            throw new InternalServerErrorException();
        }
        return calbup

    }

    async getCalbup(): Promise<Calbup[]> {
        const query = this.createQueryBuilder('calbup')
        try {
            const calbup = await query.getMany();
            return calbup;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
    
}