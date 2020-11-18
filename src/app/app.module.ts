import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { HealthController } from './controller/health.controller';
import { AppService } from './service/app.service';

@Module({
  controllers: [AppController, HealthController],
  providers: [AppService],
})

export class MainAppModule {}
