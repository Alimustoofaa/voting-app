import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Calbup } from './calbup.entity';
import { CalbupRepository } from './calbup.repository';
import { CreateCabupDto } from './dto/create-cabup.dto';

@Injectable()
export class CalpubService {
    constructor(
        @InjectRepository(CalbupRepository)
        private calbupRepository: CalbupRepository,
    ) { }

    async createCabup(
        createCabupDto: CreateCabupDto,
    ): Promise<Calbup>{
        return this.calbupRepository.createCabup(createCabupDto)
    }

    async deleteCalbup(
        id: number
    ): Promise<void> {
        const result = this.calbupRepository.delete(id);
        if ((await result).affected === 0 ) {
            throw new NotFoundException(`Calbup with '${id}' not found`);
        }

    }

    async getCalbup(): Promise<Calbup[]> {
        return this.calbupRepository.getCalbup();
    }

    async updateCalbup(
        id: number,
        createCabupDto: CreateCabupDto
    ): Promise<Calbup> {
        const calbup = await this.getCalbupById(id)
        const { namaCabup, namaWaCabup, visi, misi } = createCabupDto;
        
        calbup.nama_bup = namaCabup;
        calbup.nama_wabup = namaWaCabup;
        calbup.visi = visi;
        calbup.misi = misi;

        await calbup.save();
        return calbup;
    }

    async getCalbupById(
        id: number
    ): Promise<Calbup> {
        const result = await this.calbupRepository.findOne(id);
        if (!result) {
            throw new NotFoundException(`Calbup with '${id}' not found`);
        }
        return result;
    }
}
