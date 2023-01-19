import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { movie } from '../Model/movie.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies !: movie[]
 

  constructor(private movieService : MovieService , private router : Router) { }

  ngOnInit(): void {
    this.movieService.getmoviesList().subscribe(data=>{
      this.movies = data
      console.log(this.movies)
    })

  }
  details(id : number){
    this.router.navigate(['detail', id]);
  }
 
}


