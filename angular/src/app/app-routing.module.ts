import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MoviesListComponent } from './admin/movies-list/movies-list.component';
import { SeriesListComponent } from './admin/series-list/series-list.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { contactusComponent } from './contactus/contactus.component';
import { SeriesComponent } from './series/series.component';
import { DetailComponent } from './detailmovie/detail.component';
import { MovieUpdateComponent } from './admin/movie-update/movie-update.component';
import { SerieUpdateComponent } from './admin/serie-update/serie-update.component';
import { ContactListComponent } from './admin/contact-list/contact-list.component';
import { DetailserieComponent } from './detailserie/detailserie.component';
const routes: Routes = [
{path : 'home' , component : HomeComponent},
{path : 'movies' , component : MoviesComponent},
{path : 'series' , component : SeriesComponent},
{path : 'aboutus' , component : AboutusComponent},
{path : 'contactus' , component : contactusComponent},
{path : 'admin/movies' , component : MoviesListComponent},
{path : 'admin/series' , component : SeriesListComponent},
{path : 'admin/contact' , component : ContactListComponent},
{path : 'admin/updateMovie/:id' , component : MovieUpdateComponent},
{path : 'admin/updateSerie/:id' , component : SerieUpdateComponent},
{path: 'detail/:id',component:DetailComponent},
{path: 'detailserie/:id',component:DetailserieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
