import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateVoteVoterDto } from "./dto/vote-voter.dto";
import { Voter } from "./voter.entity";

@EntityRepository(Voter)
export class VoterRepository extends Repository<Voter> {
    async voteVoter(
        voteVoterDto: CreateVoteVoterDto
    ): Promise<Voter> {
        const { uuid, idCalbup } = voteVoterDto;

        const voter = new Voter();
        voter.uuid = uuid;
        voter.calbup = idCalbup;
        
        try {
            await voter.save()
        } catch (error) {
            if (error.code == '23505') {
                throw new ConflictException('Maaf, Hanya Bisa 1 Kali Vote');
            }
            throw new InternalServerErrorException();
        }

        return voter
    }
}