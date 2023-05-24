import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

const routes: Routes = [
  { path: 'thumbnail/:file', component: ThumbnailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }