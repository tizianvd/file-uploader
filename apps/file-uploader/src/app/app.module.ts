import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@file-uploader/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'cart',
        loadChildren: () => import('@file-uploader/ui').then((m) => m.UploadDialogComponent),
      },
      {
        path: '**',
        loadChildren: () => import('@file-uploader/ui').then((m) => m.UploadDialogComponent),
      },
    ]),
    BrowserAnimationsModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
