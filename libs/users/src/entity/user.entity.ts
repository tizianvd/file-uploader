import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity {
    constructor(user: User) {
      this.login = user.login;
      this.name = user.name;
      this.password = user.password;
    }
    
    @ApiProperty()
    login: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    password: string;
}