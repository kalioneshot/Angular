import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersContainerComponent } from './containers/users/users.component';
import { UserContainerComponent } from './containers/user/user.component';

const routes: Routes = [
  { path: 'users', component: UsersContainerComponent },
  { path: 'user/:id', component: UserContainerComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
