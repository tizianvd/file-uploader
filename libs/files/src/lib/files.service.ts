import { Injectable } from '@nestjs/common';
import { PrismaClient, File, Prisma} from '@prisma/client'


const prisma = new PrismaClient()

@Injectable()
export class FilesService {
    public getFiles(): Promise<File[]> {
        return prisma.file.findMany()
      }

    public async addFile(name: string, content: string): Promise<File> {
      return await prisma.file.create({
        data : {
          name: name,
          content: content
        }
     })
}
}
