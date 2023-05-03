import { Injectable } from '@nestjs/common';
import { PrismaClient, File, Prisma} from '@prisma/client'


const prisma = new PrismaClient()

@Injectable()
export class FilesService {
    public getFiles(): Promise<File[]> {
        return prisma.file.findMany()
      }

    public addFile(data: Prisma.FileCreateInput): Promise<File> {
    return prisma.file.create({
        data,
     })
}
}
