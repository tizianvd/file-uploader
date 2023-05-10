import { Component } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'file-uploader-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss'],
})
export class UploadDialogComponent {
  selectedFiles?: FileList;
  files: any[] = [];

  constructor(private fileService: FileService){}

  onFileSelected(event: any) {
      this.selectedFiles = event.target.files;
      if (this.selectedFiles ){
        for(let i = 0; i < this.selectedFiles?.length; i++) {
          this.files.push({
            name: this.selectedFiles.item(i)?.name,
            progress: 0,
          });
        }

        this.fileService.uploadFile().subscribe();
      }
  }


}
