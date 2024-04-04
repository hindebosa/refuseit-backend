import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('add')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/and')
  getHello(): string {
    return this.appService.getHello();
  }
}
