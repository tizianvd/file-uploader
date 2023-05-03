import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';




@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, ButtonModule, TableModule, ProgressBarModule],
  declarations: [UploadDialogComponent],
  exports: [UploadDialogComponent],
})
export class UiModule {}
