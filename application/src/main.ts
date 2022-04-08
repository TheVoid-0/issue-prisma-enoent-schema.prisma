import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { version } from '../package.json';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['warn'],
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(process.env.PORT || 3000);
  process.env.VERSION = version;
  console.log(
    `Application is running on: ${await app.getUrl()}\nApplication Version: ${version}\nMODE: ${
      process.env.MODE
    }`,
  );

  const appService = app.get(AppService)
  await appService.test()
}
bootstrap();
