import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getList() {
    return this.userService.fetchUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.fetchUser(id);
  }
}
