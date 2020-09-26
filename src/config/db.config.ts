import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const configDb = config.get('db');

export const dbConfig: TypeOrmModuleOptions = {
    type: configDb.type,
    host: process.env.RDS_HOSTNAME || configDb.host,
    port: process.env.RDS_PORT || configDb.port,
    username: process.env.RDS_USERNAME || configDb.username,
    password: process.env.RDS_PASSWORD || configDb.password,
    database: process.env.RDS_DATABASE || configDb.database,
    synchronize: process.env.TYPEORM_SYNC || configDb.synchronize,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};