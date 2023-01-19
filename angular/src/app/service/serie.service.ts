import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { serie } from "../Model/serie.model";

@Injectable({
    providedIn: 'root'
  })
  export class SerieService {
  
    private baseURL = "http://localhost:8080/serie";
  
    constructor(private httpClient: HttpClient) { }
    
    getseriesList(): Observable<serie[]>{
      return this.httpClient.get<serie[]>(`${this.baseURL}/all`);
    }
  
    createserie(serie: serie): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}/add`, serie);
    }
  
    getserieById(id: number): Observable<serie>{
      return this.httpClient.get<serie>(`${this.baseURL}/${id}`);
    }
  
    updateserie(id: number, serie: serie): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/update/${id}`, serie);
    }
  
    deleteserie(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
    }
  }