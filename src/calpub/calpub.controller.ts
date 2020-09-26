import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCabupDto } from './dto/create-cabup.dto';
import { CalpubService } from './calpub.service';
import { Calbup } from './calbup.entity';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/user.guard';
import { Roles } from 'src/auth/user-role.decoration';

@Controller('calpub')
@UseGuards(AuthGuard(), RolesGuard)
export class CalpubController {
    constructor(private calbupService: CalpubService) {}

    @Post('/create')
    // @Roles('admin')
    @UsePipes(ValidationPipe)
    createCabup(
        @Body() createCapubDto: CreateCabupDto,
    ): Promise<Calbup> {
        return this.calbupService.createCabup(createCapubDto)
    }

    @Delete('/:id')
    @Roles('admin')
    deleteCalbup(
        @Param('id', ParseIntPipe) id: number
    ): Promise<void> {
        return this.calbupService.deleteCalbup(id);
    }

    @Get()
    @Roles('admin', 'voter')
    getCalbup(): Promise<Calbup[]> {
        return this.calbupService.getCalbup();
    }

    @Patch('/:id')
    @Roles('admin')
    @UsePipes(ValidationPipe)
    updateCalbup(
        @Param('id', ParseIntPipe) id: number,
        @Body() createCabupDto: CreateCabupDto
    ): Promise<Calbup> {
        return this.calbupService.updateCalbup(id, createCabupDto)
    }
}
