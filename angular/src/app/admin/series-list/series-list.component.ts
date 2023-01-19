import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { serie } from 'src/app/Model/serie.model';
import { SerieService } from 'src/app/service/serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series!: serie[];
  serie: serie = new serie();

  constructor(private seriesService: SerieService,
    private router: Router) { }

  ngOnInit(): void {
    this.getseries();
  }

  private getseries(){
    this.seriesService.getseriesList().subscribe(data => {
      this.series = data;
    });
  }


  deleteseries(id: number){
    this.seriesService.deleteserie(id).subscribe( data => {
      console.log(data);
      this.getseries();
    })
  }
 

  saveserie(){
    this.seriesService.createserie(this.serie).subscribe( data =>{
      console.log(data);
      this.getseries();
    },
    error => console.log(error));
  }

  
  updateSerie(id: number){
    this.router.navigate(['admin/updateSerie', id]);

  }
  onSubmit(){ 
    this.saveserie();
    this.ngOnInit();
   
  }

}
