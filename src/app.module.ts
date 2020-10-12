import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { typeOrmOptions } from 'src/config'

import { SindicanciaModule } from './modules/sindicancia/sindicancia.module';
import { LigacaoModule } from './modules/ligacao/ligacao.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmOptions),
    SindicanciaModule,
    LigacaoModule
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

