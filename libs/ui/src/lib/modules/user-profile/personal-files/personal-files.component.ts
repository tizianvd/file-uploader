import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { AuthService } from '../../../services/auth.service';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'file-uploader-personal-files',
  templateUrl: './personal-files.component.html',
  styleUrls: ['./personal-files.component.css'],
})
export class PersonalFilesComponent implements OnInit {
  $files?: Observable<any[]>;

  constructor(private filesService: FileService,
              private authService: AuthService){};

  ngOnInit() {
    this.loadFiles();
  }

  loadFiles() {
    this.$files = this.filesService.getUserFiles(this.authService.getUserId());
  }

  async removeFile(id: string) {
    await firstValueFrom(this.filesService.removeFile(id));
    this.loadFiles();
  }
}
