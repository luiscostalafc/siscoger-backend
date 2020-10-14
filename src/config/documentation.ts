import { DocumentBuilder } from '@nestjs/swagger';
import { version } from '../../package.json'

export const documentationOptions = new DocumentBuilder()
    .setTitle('SISCOGER API')
    .setDescription('SISCOGER API documentation')
    .setVersion(version)
    .build();