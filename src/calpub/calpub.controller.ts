import { Body, Controller, Post } from '@nestjs/common';
import { CreateCabupDto } from './dto/create-cabup.dto';
import { CalpubService } from './calpub.service';
import { Calbup } from './calbup.entity';

@Controller('calpub')
export class CalpubController {
    constructor(private calbupService: CalpubService) {}

    @Post('/create')
    createCabup(
        @Body() createCapubDto: CreateCabupDto,
    ): Promise<Calbup> {
        return this.calbupService.createCabup(createCapubDto)
    }
}
