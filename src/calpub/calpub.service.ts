import { Injectable } from '@nestjs/common';
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
}
