import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/data/baseUrl';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {


  constructor(private http: HttpClient) {}

  getMovies(page =1 , size = 9) : Observable<Movie[]> {
    return this.http.get<Movie[]>(`${baseUrl.tmdb}/discover/movie?page=${page}&page_size=${size}`);
  }

  getFavouriteMovies(page =1 , size = 9) : Observable<Movie[]> {
    return this.http.get<Movie[]>(`${baseUrl.tmdb}/account/20209783/favorite/movies?page=${page}&page_size=${size}`);
  }

  addToFavourites(id : number) : Observable<any>{
    const payload : any = {
      media_type: 'movie',
      media_id: id,
      favorite: true
    }
    return this.http.post<any>(`${baseUrl.tmdb}/account/20209783/favorite`, payload);

  }
}
