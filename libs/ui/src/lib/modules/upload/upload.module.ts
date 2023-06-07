import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UploadDialogComponent,
      },
    ]),
  ]
})
export class UploadModule { }
