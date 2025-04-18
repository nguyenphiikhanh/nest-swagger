import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { v1_config } from '@/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //global prefix
  app.setGlobalPrefix(`${process.env.API_PREFIX}/${process.env.API_VERSION}`);

  const documentFactory = () => SwaggerModule.createDocument(app, v1_config);
  SwaggerModule.setup(
    `${process.env.API_PREFIX}/${process.env.API_VERSION}/${process.env.API_DOCUMENT_ENDPOINT}`,
    app,
    documentFactory,
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
