import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard'

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { ProgressBarModule } from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, ButtonModule, TableModule, InputTextModule, ProgressBarModule, HttpClientModule, ClipboardModule],
  declarations: [UploadDialogComponent],
  exports: [UploadDialogComponent],
})
export class UiModule {}
