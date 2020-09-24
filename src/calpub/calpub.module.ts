import { Module } from '@nestjs/common';
import { CalpubService } from './calpub.service';
import { CalpubController } from './calpub.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalbupRepository } from './calbup.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CalbupRepository]),
  ],
  providers: [CalpubService],
  controllers: [CalpubController]
})
export class CalpubModule {}
