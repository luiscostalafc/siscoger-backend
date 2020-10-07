import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { resolve } from 'path';
import { SindicanciaModule } from './modules/sindicancia/sindicancia.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: [
        'error',
        // 'info',
        'log',
        'migration',
        // 'query',
        'schema',
        'warn'
      ],
      entities: [
        resolve(__dirname, 'modules', '**', 'entity', '*.entity.{ts,js}'),
      ],
      migrations: [
        resolve(__dirname, 'modules', '**', 'migrations', '*.{ts,js}'),
      ],
      // seeds: [
      //   resolve(__dirname, 'modules', '**', 'seeds', '*.{ts,js}'),
      // ],
      // factories: [
      //   resolve(__dirname, 'modules', '**', 'factory', '*.factory.{ts,js}'),
      // ],
      synchronize: process.env.DB_SYNC === 'true',
    }),
    SindicanciaModule
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

