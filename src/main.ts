import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'verbose'],
  });
  const config = app.get(ConfigService);
  console.log(config);
  await app.listen(config.get('PORT'));
}
bootstrap();
