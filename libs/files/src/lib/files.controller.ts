import { Controller, Get } from '@nestjs/common';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
    constructor(private filesService: FilesService){}
    @Get()
    public getProducts() {
        return this.filesService.getFiles()
    }
}
