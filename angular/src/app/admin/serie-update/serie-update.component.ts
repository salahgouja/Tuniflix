import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { serie } from 'src/app/Model/serie.model';
import { SerieService } from 'src/app/service/serie.service';

@Component({
  selector: 'app-serie-update',
  templateUrl: './serie-update.component.html',
  styleUrls: ['./serie-update.component.css']
})
export class SerieUpdateComponent implements OnInit {

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

  onSubmit(){
    this.serieService.updateserie(this.id, this.serie).subscribe( data =>{
      this.goToserieList();
    }
    , error => console.log(error));
  }

  goToserieList(){
    this.router.navigate(['/admin/series']);
  }

}
