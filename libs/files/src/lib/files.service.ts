import { Injectable } from '@nestjs/common';
import { PrismaClient, File, Prisma} from '@prisma/client'


const prisma = new PrismaClient()

@Injectable()
export class FilesService {
    public async getFiles(): Promise<File[]> {
        return await prisma.file.findMany()
    }

    public async addFile(name: string): Promise<File> {
        const extension = name.match(/\.([^.]+)$/)
      return await prisma.file.create({
        data : {
          name: name.replace(/\.[^/.]+$/, ''),
          extension: extension ? extension[1] : "png",
        }
     })
}
}
