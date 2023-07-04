import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { ListallpollsComponent } from './listallpolls/listallpolls.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path:'signup',
    component: SignupComponent 
  },

  {
    path:'login',
    component: LoginComponent
  },

  {
    path:'home',
    component: HomeComponent,canActivate: [AuthGuard]
  },

  {
    path:'userlist',
    component: UserListComponent,canActivate: [AuthGuard]
  },
  {
    path:'allpolls',
    component:ListallpollsComponent,canActivate: [AuthGuard]
  },
  
   {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
