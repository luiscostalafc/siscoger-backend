import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupDocumentation } from './common/documentation';

import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(helmet())
  app.useGlobalPipes(new ValidationPipe());
  void setupDocumentation(app)

  await app.listen(process.env.APP_PORT);
}

bootstrap();
