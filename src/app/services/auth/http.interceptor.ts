import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { baseUrl } from 'src/app/data/baseUrl';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private tokenService : TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken();
    const api_key = '301236a8299858bbd46f4cee461b54b8'
    if(token){
      request = request.clone({
        setHeaders : {
          Authorization : `Bearer ${token}`
        }
      });
      console.log(request.url)

      if(request.url.startsWith(baseUrl.tmdb)){
      // const newParams = new HttpParams().set('api_key', api_key);
      const tmdbToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDEyMzZhODI5OTg1OGJiZDQ2ZjRjZWU0NjFiNTRiOCIsInN1YiI6IjY0YzE4Zjk2MWNmZTNhMGViNDI5NTI4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6tHq61JHTCu3CNwUfwwAwN_yaTfcMJ-ah0l429TzQlg';
      request = request.clone({
        setHeaders : {
          Authorization : `Bearer ${tmdbToken}`
        }
      });

      // Clone the request with the new HttpParams object
      // request = request.clone({ params: newParams });
      }
    }
    return next.handle(request);
  }
}
