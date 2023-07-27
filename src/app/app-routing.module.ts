import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { HomePageComponent } from './modules/movies/pages/home-page/home-page.component';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: '',
    canActivate: [AuthGuardGuard],
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
