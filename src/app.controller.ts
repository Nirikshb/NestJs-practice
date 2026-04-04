import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';

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

  // You need to build a feature that allows a user to 
  // register a new account by sending their email and password.
  // After a basic creation now we move onto the use case of dto
  @Post('registerUser')
  registerUser(
    @Body() userData: CreateUserDto
  ): string {
    return this.appService.registerUser(userData);
  }



}
