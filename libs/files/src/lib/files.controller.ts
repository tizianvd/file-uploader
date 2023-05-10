import { Controller, Get, Post, Body } from '@nestjs/common';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
    constructor(private filesService: FilesService){}
    @Get()
    public getProducts() {
        return this.filesService.getFiles()
    }

    @Post('add')
    async addProduct(@Body() data: { name: string}) {
        return await this.filesService.addFile({name: data.name});
    }
}
