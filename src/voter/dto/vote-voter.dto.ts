import { IsNotEmpty, IsUUID } from "class-validator";
import { Calbup } from "src/calpub/calbup.entity";

export class CreateVoteVoterDto {
    @IsNotEmpty()
    @IsUUID()
    uuid: string;

    @IsNotEmpty()
    idCalbup: Calbup;
}