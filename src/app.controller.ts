import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getFakeUser(): string[] {
    return this.appService.getFakeUser();
  }

  @Get('sum')
  getTotalSum(): number {
    return this.appService.getTotalSum();
  }
}
