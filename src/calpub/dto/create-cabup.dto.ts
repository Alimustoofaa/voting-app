import { IsNotEmpty } from "class-validator";

export class CreateCabupDto {
    @IsNotEmpty()
    namaCabup: string;

    @IsNotEmpty()
    namaWaCabup: string;

    @IsNotEmpty()
    visi: string;

    @IsNotEmpty()
    misi: string;
}