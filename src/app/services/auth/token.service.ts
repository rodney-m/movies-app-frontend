import { Injectable } from '@angular/core';

const  TOKEN = 'movieAppToken'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(data:any){
    sessionStorage.setItem(TOKEN, data)
  }

  getToken() {
    return sessionStorage.getItem(TOKEN)
  }

  removeToken(){
    sessionStorage.removeItem(TOKEN);
  }
}
