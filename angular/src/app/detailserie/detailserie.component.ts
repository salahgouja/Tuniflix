import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from '../Model/movie.model';
import { serie } from '../Model/serie.model';
import { MovieService } from '../service/movie.service';
import { SerieService } from '../service/serie.service';
@Component({
  selector: 'app-detailserie',
  templateUrl: './detailserie.component.html',
  styleUrls: ['./detailserie.component.css']
})
export class DetailserieComponent implements OnInit {

  
    id!: number;
    serie: serie = new serie();
    constructor(private serieService: SerieService,
      private route: ActivatedRoute,
      private router: Router) { }
      
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.serieService.getserieById(this.id).subscribe(data => {
        this.serie = data;
      }, error => console.log(error));
    }
  
  }


