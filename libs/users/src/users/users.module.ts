import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtStrategy } from '../auth/jwt.strategy';
@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
  // imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
