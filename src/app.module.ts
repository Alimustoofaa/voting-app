import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalpubModule } from './calpub/calpub.module';
import { dbConfig } from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    CalpubModule,
  ],
})
export class AppModule {}
