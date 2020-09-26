import { Body, Controller, Post } from '@nestjs/common';
import { CreateVoteVoterDto } from './dto/vote-voter.dto';
import { Voter } from './voter.entity';
import { VoterService } from './voter.service';

@Controller('voter')
export class VoterController {
    constructor(private voterService: VoterService) {}

    @Post()
    voteVoter(
        @Body() createVoteVoterDto: CreateVoteVoterDto
    ): Promise<Voter> {
        return this.voterService.voteVoter(createVoteVoterDto);
    }
}
