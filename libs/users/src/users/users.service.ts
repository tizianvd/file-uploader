import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserUpdateDto } from '../auth/dto/user-update.dto';

const prisma = new PrismaClient();
@Injectable()
export class UsersService {
  public findOne(login: string) {
    return prisma.user.findFirst({ where: { login: login } });
  }

  public findAll() {
    return prisma.user.findMany();
  }

  public update(login: string, data: UserUpdateDto) {
    return prisma.user.update({ where: { login: login }, data: data });
  }

  public remove(login: string) {
    return prisma.user.delete({ where: { login: login } });
  }
}
