import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { typeOrmOptions } from 'src/config'
import { SindicanciaModule } from './modules/sindicancia/sindicancia.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmOptions),
    SindicanciaModule
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

