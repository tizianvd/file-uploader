import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileRoutesComponent } from './user-profile-routes/user-profile-routes.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserProfileRoutesComponent,
      },
    ]),
  ]
})
export class UserProfileModule { }
