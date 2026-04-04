import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bye Bye';
  }

  getFakeUser(): string[] {
    return ['Niriksh', 'Bharti'];
  }

  getTotalSum(): number {
    return 2 * 5;
  }

  // products
  getPersonalizedGreeting(username: string) {
    return `Hey Dawg ${username}`;
  }
}
