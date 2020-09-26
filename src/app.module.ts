import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalpubModule } from './calpub/calpub.module';
import { dbConfig } from './config/db.config';
import { VoterModule } from './voter/voter.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    CalpubModule,
    VoterModule,
    AuthModule,
  ],
})
export class AppModule {}
