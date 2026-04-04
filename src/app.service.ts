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



  //  Problem Statement: - How to extract optional filters from the URL using @Query()
  // You need to build a route that fetches a list of staff members, 
  // but allows the client to optionally filter them by 
  // their "role" (e.g., manager, intern). 

  getStaffByRole(role: string) {
    if (role) {
      return `Ladies and gentleman we have a ${role}`
    } else {
      return 'Shit Biscuit No role Provided';
    }
  }



  registerUser(email: string, password: string) {
    return `Hey Registered. -> ${email} `
  }
}
