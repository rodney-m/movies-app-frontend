import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.scss']
})
export class FavouritesPageComponent {
  movies: Movie[] = [ ];
  page = 1;
  loading = false;

  constructor(private moviesService : MoviesService){}

  ngOnInit(): void {
      this.getMovies(this.page);
  }

  toggleLoading(){
    this.loading = !this.loading
  }

  getMovies(page : number){
    this.toggleLoading()
    this.moviesService.getFavouriteMovies(page).subscribe({
      next: (res :any) => {
        this.movies = res.results;
        this.page = res.page
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.toggleLoading()
      }
    })
  }

  changePage(action : string){
    const newPage = action ==='prev' ? this.page - 1 : this.page + 1
    this.getMovies(newPage)
  }
}
