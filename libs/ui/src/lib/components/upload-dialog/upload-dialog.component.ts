import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';
import { firstValueFrom, map, tap } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'file-uploader-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss'],
})
export class UploadDialogComponent implements OnInit {
  selectedFiles?: FileList;
  files: any[] = [];

  uploadedFiles?: Promise<any[]>;

  constructor(private fileService: FileService, private _sanitizer: DomSanitizer){}

  onFileSelected(event: any) {
      this.selectedFiles = event.target.files;
      if (this.selectedFiles ){
        for(let i = 0; i < this.selectedFiles?.length; i++) {
          const file = this.selectedFiles.item(i);
          if (file) {
            this.files.push({
              name: file.name,
              progress: 0,
            });

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (reader.result) {
                  this.fileService.uploadFile(file.name, reader.result.toString().split(",")[1]).subscribe();
                }
            };
          }
        }
      }
  }

  ngOnInit(): void {
      this.uploadedFiles = firstValueFrom(this.fileService.getAllFiles().pipe(map(
        data => data.map(file => Object.assign(file, {content: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + file.content)}))
      )
      ));
  }
}
