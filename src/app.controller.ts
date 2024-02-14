import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.getHello();
  }

  @Get('hi')
  getHello(): string {
    return this.appService.getHello();
  }
}
