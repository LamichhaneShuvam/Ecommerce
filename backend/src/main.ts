import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(env.PORT) || 3000, () => {
    Logger.log(
      `Application Started At PORT ${env.PORT || 3000}`,
      'NestApplication',
    );
  });
}

bootstrap();
