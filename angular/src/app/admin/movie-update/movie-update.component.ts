import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from 'src/app/Model/movie.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  id!: number;
  movie: movie = new movie();
  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movieService.getmovieById(this.id).subscribe(data => {
      this.movie = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.movieService.updatemovie(this.id, this.movie).subscribe( data =>{
      this.goTomovieList();
    }
    , error => console.log(error));
  }

  goTomovieList(){
    this.router.navigate(['/admin/movies']);
  }

}
