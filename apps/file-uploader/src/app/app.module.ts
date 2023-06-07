import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@file-uploader/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'profile',
        loadChildren: () => import('@file-uploader/ui').then((m) => m.UserProfileModule),
      },
      {
        path: '**',
        loadChildren: () => import('@file-uploader/ui').then((m) => m.UploadModule),
      },
    ]),
    BrowserAnimationsModule,
    UiModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de-DE" }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
