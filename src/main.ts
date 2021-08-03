import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import * as compression from 'compression';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'verbose'],
  });

  app.use(csurf());
  app.use(compression());
  app.use(helmet());

  const config = app.get(ConfigService);
  console.log(config);
  await app.listen(config.get('PORT'));
}
bootstrap();
