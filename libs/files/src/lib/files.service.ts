import { Injectable } from '@nestjs/common';
import { PrismaClient, File, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FilesService {
  public async getFiles(userid: number): Promise<File[]> {
    if (userid) {
      return await prisma.file.findMany({
        where: { userId: userid },
      });
    } else {
      return await prisma.file.findMany();
    }
  }

  public async addFile(name: string, userId: string): Promise<File> {
    const extension = name.match(/\.([^.]+)$/);
    return await prisma.file.create({
      data: {
        name: name.replace(/\.[^/.]+$/, ''),
        extension: extension ? extension[1] : 'png',
        user: { connect: { id: Number(userId) } },
      },
    });
  }

  public async removeFile(id: string) {
    return await prisma.file.delete({where : {id: id}});
  }
}
