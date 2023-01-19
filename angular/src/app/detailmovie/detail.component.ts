import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from '../Model/movie.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

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

}

