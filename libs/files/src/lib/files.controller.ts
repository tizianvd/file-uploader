import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilesService } from './files.service';
import * as fs from 'fs';
import * as path from 'path';
import sharp = require('sharp')

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}
  @Get()
  async getFiles() {
    return await this.filesService.getFiles();
  }

  ensureDirectoryExistence(filePath: string) {
    const dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
      return true;
    }

    this.ensureDirectoryExistence(dirName);
    fs.mkdirSync(dirName);
    return false;
  }

  async createThumbnail(path: string) {
        await sharp(path)
        .rotate()
        .resize({
            fit: sharp.fit.contain,
            height: 150
        })
        .jpeg({ mozjpeg: true })
        .toFile(`${path.replace(/\.[^/.]+$/, '')}_thumbnail.png`)
    }
  
  @Post('add')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: path.join(__dirname, '..', 'uploads/tmp'),
      }),
      //fileFilter: imageFileFilter,
    }),
  )
  async addFile(@UploadedFile() file: any) {
    const fileData = await this.filesService.addFile(file.originalname);
    if (fileData) {
        const newPath = path.join(__dirname, '..', `uploads/${fileData.id}/${file.originalname}`);
        this.ensureDirectoryExistence(newPath);
        fs.rename(path.join(__dirname, '..', `uploads/tmp/${file.filename}`), newPath, function (err) {
            if (err) throw err
        })

        console.log(file);

        await this.createThumbnail(newPath);
    }
    const response = {
      originalname: file.originalname,
      extension: fileData ? fileData.extension : 'png',
      id: fileData ? fileData.id : -1,
    };
    return response;
  }
  
}
