import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movie } from 'src/app/Model/movie.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies!: movie[];
  movie: movie = new movie();



  constructor(private MoviesService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(){
    this.MoviesService.getmoviesList().subscribe(data => {
      this.movies = data;
    });
  }

 

   updateMovie(id: number){
    this.router.navigate(['admin/updateMovie', id]);

  }

  deleteMovies(id: number){
    this.MoviesService.deletemovie(id).subscribe( data => {
      console.log(data);
      this.getMovies();
    })
  }
 

  saveMovie(){
    this.MoviesService.createmovie(this.movie).subscribe( data =>{
      console.log(data);
      this.getMovies();
    },
    error => console.log(error));
  }

  
  onSubmit(){ 
    this.saveMovie();
    this.ngOnInit();
   
  }

}
