import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { serie } from '../Model/serie.model';
import { SerieService } from '../service/serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series !: serie[]

  constructor(private SeriesService : SerieService , private router : Router) { }

  ngOnInit(): void {
    this.SeriesService.getseriesList().subscribe(data=>{
      this.series = data
      console.log(this.series)
    })

  }
  details(id : number){
    this.router.navigate(['detailserie', id]);
  }

}
