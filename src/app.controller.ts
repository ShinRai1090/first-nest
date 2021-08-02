import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private configService: ConfigService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('appName')
  getAppName() {
    const appName = this.configService.get<string>('APP_NAME');
    return {
      appName,
    };
  }
}
