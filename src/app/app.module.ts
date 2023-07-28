import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './modules/movies/pages/home-page/home-page.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { AppHttpInterceptor } from './services/auth/http.interceptor';
import { FavouritesPageComponent } from './modules/movies/pages/favourites-page/favourites-page.component';
import { MovieCardComponent } from './modules/movies/components/movie-card/movie-card.component';
import { PaginatorComponent } from './modules/movies/components/paginator/paginator.component';
import { ContactPageComponent } from './modules/movies/pages/contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomePageComponent,
    HeaderComponent,
    FavouritesPageComponent,
    MovieCardComponent,
    PaginatorComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
