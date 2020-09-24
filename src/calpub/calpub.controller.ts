import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCabupDto } from './dto/create-cabup.dto';
import { CalpubService } from './calpub.service';
import { Calbup } from './calbup.entity';

@Controller('calpub')
export class CalpubController {
    constructor(private calbupService: CalpubService) {}

    @Post('/create')
    @UsePipes(ValidationPipe)
    createCabup(
        @Body() createCapubDto: CreateCabupDto,
    ): Promise<Calbup> {
        return this.calbupService.createCabup(createCapubDto)
    }

    @Delete('/:id')
    deleteCalbup(
        @Param('id', ParseIntPipe) id: number
    ): Promise<void> {
        return this.calbupService.deleteCalbup(id);
    }

    @Get()
    getCalbup(): Promise<Calbup[]> {
        return this.calbupService.getCalbup();
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    updateCalbup(
        @Param('id', ParseIntPipe) id: number,
        @Body() createCabupDto: CreateCabupDto
    ): Promise<Calbup> {
        return this.calbupService.updateCalbup(id, createCabupDto)
    }
}
