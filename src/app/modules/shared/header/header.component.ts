import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu: {name: string, url : string}[] = [
    {
      name: 'home',
      url: '/'
    },
    {
      name: 'favourites',
      url: '/favourites'
    },
    {
      name: 'contact',
      url: '/contact'
    },
  ];
  
  isOpen = false;
  
  constructor(private tokenService : TokenService, private router : Router){}

  get isLoggedIn() : boolean{
    const token = this.tokenService.getToken();
    const loggedIn = token? true: false;
    return loggedIn
  }

  get currentUrl() : string{
    return this.router.url
  }

  signOut() {
    this.tokenService.removeToken();
    window.location.reload();

    console.log("sign out")
  }

}
