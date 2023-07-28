import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { HomePageComponent } from './modules/movies/pages/home-page/home-page.component';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';
import { FavouritesPageComponent } from './modules/movies/pages/favourites-page/favourites-page.component';
import { ContactPageComponent } from './modules/movies/pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'favourites',
    component: FavouritesPageComponent
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
