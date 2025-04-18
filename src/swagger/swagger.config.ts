import { DocumentBuilder } from '@nestjs/swagger';

export const v1_config = new DocumentBuilder()
  .setTitle('NEST API DOCUMENTS')
  .setDescription('The demo API documentation')
  .setVersion('1.0')
  .addTag('API list')
  .build();
