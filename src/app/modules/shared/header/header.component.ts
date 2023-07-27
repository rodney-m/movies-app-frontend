import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private tokenService : TokenService){}

  get isLoggedIn() : boolean{
    const token = this.tokenService.getToken();
    const loggedIn = token? true: false;
    return loggedIn
  }

  signOut() {
    this.tokenService.removeToken();
    window.location.reload();

    console.log("sign out")
  }
}
