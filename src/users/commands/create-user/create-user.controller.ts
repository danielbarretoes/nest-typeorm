import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from 'src/users/services/users.service';

@Controller('users')
export class CreateUserController {
  constructor(private userService: UsersService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    return this.userService.createUser(newUser);
  }
}
