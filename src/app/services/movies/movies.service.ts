import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular';
  private authToken =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDEyMzZhODI5OTg1OGJiZDQ2ZjRjZWU0NjFiNTRiOCIsInN1YiI6IjY0YzE4Zjk2MWNmZTNhMGViNDI5NTI4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6tHq61JHTCu3CNwUfwwAwN_yaTfcMJ-ah0l429TzQlg';

  constructor(private http: HttpClient) {}

  getMovies(page =1 , size = 9) : Observable<Movie[]> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', this.authToken);
    return this.http.get<Movie[]>(`${this.apiUrl}?page=${page}&page_size=${size}`, { headers: headers });
  }
}
