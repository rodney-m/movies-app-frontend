import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/data/baseUrl';
import { LoginPayload, User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(user : LoginPayload): Observable<User> {
    return this.http.post<User>(`${baseUrl.dev}/users/login`, user);
  }
  registerUser(user : User): Observable<User> {
    return this.http.post<User>(`${baseUrl.dev}/users`, user);
  }

}
