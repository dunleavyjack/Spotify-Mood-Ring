import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:4200/'],
      credentials: true,
    },
  });

  // app.enableCors({
  //   methods: ['GET'],
  //   // allowedHeaders: ['Authorization', 'Content-type'],
  //   origin: ['http://localhost:4200'],
  //   credentials: true,
  // });

  // app.enableCors({
  //   origin: 'http://localhost:4200',
  //   credentials: true,
  // });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🎵 Moodring Backend is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
