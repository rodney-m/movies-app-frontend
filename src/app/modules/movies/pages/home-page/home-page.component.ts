import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  movies: Movie[] = [ ];
  page = 1;
  loading = false;

  constructor(private moviesService : MoviesService){}

  ngOnInit(): void {
      this.getMovies();
  }

  toggleLoading(){
    this.loading = !this.loading
  }

  getMovies(){
    this.toggleLoading()
    this.moviesService.getMovies(this.page).subscribe({
      next: (res :any) => {
        this.movies = res.results
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.toggleLoading()
      }
    })
  }

  
}
