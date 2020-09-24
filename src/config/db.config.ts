import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'db_vote_cabup',
    synchronize: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};