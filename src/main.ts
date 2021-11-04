import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Large API')
    .setDescription('This is the API used for the blog platform "Large".')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const path = 'api';
  SwaggerModule.setup(path, app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  setupSwagger(app);

  await app.listen(3030);
}
bootstrap();
