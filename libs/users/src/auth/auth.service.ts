import {
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthEntity } from '../entity/auth.entity';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async validateUser(login: string, password: string) {
    const user = await prisma.user.findUnique({ where: { login: login } });

    Logger.log(`Login: ${login} password:${password}`);

    if (!user) {
      return null;
    }

    const isPasswordValid = compare(user.password, password);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
  async login(user: any): Promise<AuthEntity> {
    Logger.log(user.username);
    const payload = {
      login: user.login,
      sub: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
  async register(data: CreateUserDto) {
    return prisma.user.create({
      data: {
        login: data.login,
        name: data.name,
        password: await hash(data.password, 10),
      },
    });
  }
}
