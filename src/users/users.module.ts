import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { CreateUserController } from './commands/create-user/create-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CreateUserController],
  providers: [UsersService],
})
export class UsersModule {}
