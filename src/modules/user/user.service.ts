import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  fetchUsers() {
    return [
      {
        id: 1,
        firstName: 'Sachin',
        lastName: 'Hegde',
      },
      {
        id: 2,
        firstName: 'Mohini',
        lastName: 'Vaity',
      },
    ];
  }

  fetchUser(id: string) {
    switch (id) {
      case '1':
        return {
          id: 1,
          firstName: 'Sachin',
          lastName: 'Hegde',
        };
      case '2':
        return {
          id: 2,
          firstName: 'Mohini',
          lastName: 'Vaity',
        };
    }
  }
}
