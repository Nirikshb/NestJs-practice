import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

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

  //DYNAMIC ROUTESSS
  @Get('greeting/:username')
  getOneProduct(@Param('username') username: string): string {
    return this.appService.getPersonalizedGreeting(username);
  }


  @Get('myStaff')
  getStaffByRole(@Query('role') role: string) {
    return this.appService.getStaffByRole(role);
  }

}
