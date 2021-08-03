import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';

import * as compression from 'compression';
import * as helmet from 'helmet';
import * as favicon from 'serve-favicon';
import * as morgan from 'morgan';
import * as csurf from 'csurf';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'verbose'],
  });

  app.use(compression());
  app.use(helmet());
  app.use(favicon(join(__dirname, 'assets', 'favicon.ico')));
  app.use(morgan('dev'));

  const config = app.get(ConfigService);
  await app.listen(config.get('APP_PORT'));
  app.use(csurf());
}
bootstrap();
