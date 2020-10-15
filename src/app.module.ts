import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { typeOrmOptions } from 'src/config'

import { SindicanciaModule } from './modules/sindicancia/sindicancia.module';
import { LigacaoModule } from './modules/ligacao/ligacao.module';
import { MovimentoModule } from './modules/movimento/movimento.module';
import { OfendidoModule } from './modules/ofendido/ofendido.module';
import { SobrestamentoModule } from './modules/sobrestamento/sobrestamento.module';
import { EnvolvidoModule } from './modules/envolvido/envolvido.module';
import { AndamentoModule } from './modules/andamento/andamento.module';
import { AndamentocogerModule } from './modules/andamentocoger/andamentocoger.module';
import { ComportamentoModule } from './modules/comportamento/comportamento.module';
import { FalecimentoModule } from './modules/falecimento/falecimento.module';
import { FeriadoModule } from './modules/feriado/feriado.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmOptions),
    AndamentoModule,
    AndamentocogerModule,
    ComportamentoModule,
    EnvolvidoModule,
    FalecimentoModule,
    FeriadoModule,
    LigacaoModule,
    MovimentoModule,
    OfendidoModule,
    SindicanciaModule,
    SobrestamentoModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

