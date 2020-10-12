import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';

import { version } from './../package.json'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(helmet())
  
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('SISCOGER API')
    .setDescription('SISCOGER API documentation')
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(8888);
}
bootstrap();
