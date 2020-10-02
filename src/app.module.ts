import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SindicanciaModule } from './sindicancia/sindicancia.module';

@Module({
  imports: [SindicanciaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
