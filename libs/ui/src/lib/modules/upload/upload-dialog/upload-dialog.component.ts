import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { Observable, firstValueFrom, map, tap } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'file-uploader-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss'],
})
export class UploadDialogComponent {
  selectedFiles?: FileList;
  files: any[] = [];

  thumbnails?: Observable<any[]>;

  constructor(
    private fileService: FileService,
    private _sanitizer: DomSanitizer
  ) {}

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles?.length; i++) {
        const file = this.selectedFiles.item(i);
        if (file) {
          this.files.push({
            name: file.name,
            url: '',
            progress: 0,
          });

          this.fileService.uploadFile(file.name, file)?.subscribe({
            next: (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.files[this.files.length - 1].progress = Math.round(
                  (100 * event.loaded) / event.total
                );
              } else if (event instanceof HttpResponse) {
                const imgageData = event.body;
                this.files[
                  this.files.length - 1
                ].url = `http://localhost:3000/uploads/${imgageData.id}/${imgageData.originalname}`;
              }
            },
            error: (err: any) => {
              console.log(err);
              this.files[this.files.length - 1].progress = 0;

              if (err.error && err.error.message) {
                //this.message = err.error.message;
              } else {
                //this.message = 'Could not upload the file!';
              }

              //this.currentFile = undefined;
            },
            complete: () => {
              //this.files[this.files.length - 1].url =
              //this.thumbnails = this.fileService.getAllFiles();
            },
          });
        }
      }
    }
  }

  copyUrl(url: string) {
    console.log("e")
  }
}
