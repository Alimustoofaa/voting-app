import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { VoterController } from './voter.controller';
import { VoterRepository } from './voter.repository';
import { VoterService } from './voter.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VoterRepository]),
    AuthModule,
  ],
  controllers: [VoterController],
  providers: [VoterService]
})
export class VoterModule {}
