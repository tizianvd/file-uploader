import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDialogComponent } from './modules/upload/upload-dialog/upload-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CookieService } from 'ngx-cookie-service';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

import { RouterModule } from '@angular/router';

import { ProgressBarModule } from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';
import { PersonalFilesComponent } from './modules/user-profile/personal-files/personal-files.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    HttpClientModule,
    ClipboardModule,
    RouterModule,
  ],
  declarations: [
    UploadDialogComponent,
    PersonalFilesComponent,
    NavbarComponent,
  ],
  exports: [UploadDialogComponent, NavbarComponent],
  providers: [CookieService,  { provide: LOCALE_ID, useValue: "de-DE" }],
})
export class UiModule {}
