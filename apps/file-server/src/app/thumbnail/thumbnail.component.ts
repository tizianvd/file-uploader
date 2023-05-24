import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { Observable, firstValueFrom, map } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'file-uploader-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css'],
})
export class ThumbnailComponent implements OnInit {
    thumbnail?: Observable<any>;

    constructor(private fileService: FileService,private _sanitizer: DomSanitizer, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        const file = this.route.snapshot.paramMap.get('file');
        if (file) {
            const id = file.split('.')[0];
            this.thumbnail = this.fileService.getThumbnail(id).pipe(
                map((data: any) => this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.content))
            );
        }
    }
}
