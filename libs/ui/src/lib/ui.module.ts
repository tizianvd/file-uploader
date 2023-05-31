import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CookieService } from 'ngx-cookie-service';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { ProgressBarModule } from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { PersonalFilesComponent } from './components/personal-files/personal-files.component';

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
  declarations: [UploadDialogComponent, LoginComponent, PersonalFilesComponent],
  exports: [UploadDialogComponent, LoginComponent],
  providers: [CookieService],
})
export class UiModule {}
