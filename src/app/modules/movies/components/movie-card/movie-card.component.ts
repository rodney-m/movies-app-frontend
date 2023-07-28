import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie! : Movie;
  @Input() addToFav = true;

  constructor(private movieService : MoviesService, private toastr: ToastrService,){}
  

  addToFavourites(){
    this.movieService.addToFavourites(this.movie.id).subscribe({
      next: () => {
        this.toastr.success('Success', 'Movie added to favourites')
      },
      error: (err) => {
        this.toastr.error('Error', err?.error?.status_message ? err?.error?.status_message : 'Failed to add to favourites')
      }
    })
  }
}
