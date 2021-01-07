import * as fs from 'fs';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

const httpsOptions = {
  key: fs.readFileSync(path.resolve('certificate/private.key')),
  cert: fs.readFileSync(path.resolve('certificate/cert.crt')),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  const options = new DocumentBuilder()
    .setTitle('Nest.js Backend Template')
    .setDescription('Needs a better description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}

bootstrap();
