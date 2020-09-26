import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateVoteVoterDto } from './dto/vote-voter.dto';
import { Voter } from './voter.entity';
import { VoterService } from './voter.service';

@Controller('voter')
@UseGuards(AuthGuard())
export class VoterController {
    constructor(private voterService: VoterService) {}

    @Post()
    voteVoter(
        @Body() createVoteVoterDto: CreateVoteVoterDto
    ): Promise<Voter> {
        return this.voterService.voteVoter(createVoteVoterDto);
    }
}
