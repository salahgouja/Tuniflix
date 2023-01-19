import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { movie } from "../Model/movie.model";

@Injectable({
    providedIn: 'root'
  })
  export class MovieService {
  
    private baseURL = "http://localhost:8080/movie";
  
    constructor(private httpClient: HttpClient) { }
    
    getmoviesList(): Observable<movie[]>{
      return this.httpClient.get<movie[]>(`${this.baseURL}/all`);
    }
  
    createmovie(movie: movie): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}/add`, movie);
    }
  
    getmovieById(id: number): Observable<movie>{
      return this.httpClient.get<movie>(`${this.baseURL}/${id}`);
    }
  
    updatemovie(id: number, movie: movie): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/update/${id}`, movie);
    }
  
    deletemovie(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
    }
  }