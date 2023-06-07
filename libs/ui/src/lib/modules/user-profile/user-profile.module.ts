import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonalFilesComponent } from './personal-files/personal-files.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'files',
        component: PersonalFilesComponent,
      },
    ]),
  ]
})
export class UserProfileModule { }
