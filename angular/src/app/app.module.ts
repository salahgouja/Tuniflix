import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { contactusComponent } from './contactus/contactus.component';
import { MoviesListComponent } from './admin/movies-list/movies-list.component';
import { SeriesListComponent } from './admin/series-list/series-list.component';
import { DetailComponent } from './detailmovie/detail.component';
import {  DetailserieComponent } from './detailserie/detailserie.component';
import { MovieUpdateComponent } from './admin/movie-update/movie-update.component';
import { SerieUpdateComponent } from './admin/serie-update/serie-update.component';
import { ContactListComponent } from './admin/contact-list/contact-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    AboutusComponent,
    contactusComponent,
    MoviesListComponent,
    SeriesListComponent,
    DetailComponent,
    MovieUpdateComponent,
    SerieUpdateComponent,
    ContactListComponent,
    DetailserieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
