import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/user-role.decoration';
import { RolesGuard } from 'src/auth/user.guard';
import { CreateVoteVoterDto } from './dto/vote-voter.dto';
import { Voter } from './voter.entity';
import { VoterService } from './voter.service';

@Controller('voter')
@UseGuards(AuthGuard(), RolesGuard)
export class VoterController {
    constructor(private voterService: VoterService) {}

    @Post()
    @Roles('voter')
    voteVoter(
        @Body() createVoteVoterDto: CreateVoteVoterDto
    ): Promise<Voter> {
        return this.voterService.voteVoter(createVoteVoterDto);
    }
}
