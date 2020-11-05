import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupDocumentation } from './config/documentation';

import helmet from 'helmet';
import { PrettyLogger } from './common/logger/pretty-log';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, logger: new PrettyLogger() });

  app.use(helmet())
  app.useGlobalPipes(new ValidationPipe());
  void setupDocumentation(app)

  await app.listen(process.env.APP_PORT);
}

bootstrap();
