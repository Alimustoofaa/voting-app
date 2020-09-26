import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVoteVoterDto } from './dto/vote-voter.dto';
import { Voter } from './voter.entity';
import { VoterRepository } from './voter.repository';

@Injectable()
export class VoterService {
    constructor(
        @InjectRepository(VoterRepository)
        private voterRepository: VoterRepository,
    ) { }

    async voteVoter(
        voteVoterDto: CreateVoteVoterDto
    ): Promise<Voter> {
        return this.voterRepository.voteVoter(voteVoterDto)
    }
}
