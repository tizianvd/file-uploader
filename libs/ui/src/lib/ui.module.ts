import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { ProgressBarModule } from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    ClipboardModule,
  ],
  declarations: [UploadDialogComponent, LoginComponent],
  exports: [UploadDialogComponent, LoginComponent],
})
export class UiModule {}
