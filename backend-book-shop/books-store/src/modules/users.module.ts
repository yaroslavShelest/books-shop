import { Module } from '@nestjs/common';
import { UserController } from '../controllers/users.controller';
import { UserSchema } from '../repozitories/schemas/user.schema';
import { UserService } from '../services/users.service';


@Module({
  
})
export class AuthModule {}