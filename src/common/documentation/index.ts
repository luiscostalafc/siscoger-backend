import { SwaggerModule } from '@nestjs/swagger';
import { documentationOptions } from 'src/config'

export function setupDocumentation (app) {
  const document = SwaggerModule.createDocument(app, documentationOptions);
  SwaggerModule.setup('documentation', app, document);
}