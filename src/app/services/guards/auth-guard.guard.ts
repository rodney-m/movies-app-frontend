import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../auth/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
    private router : Router,
    private tokenService : TokenService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.tokenService.getToken();
    if(token){
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if(!this._tokenExpired(tokenDecode.exp)) return true;
    }
    this.router.navigate(['/signin'])
    return false;
  }

  private _tokenExpired(expiration : any) : boolean {
    return Math.floor(new Date().getTime() / 1000) >= expiration;
  }
  
}
