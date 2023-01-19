import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { contact } from "../Model/contact.model";

@Injectable({
    providedIn: 'root'
  })
  export class ContactService {
  
    private baseURL = "http://localhost:8080/contact";
  
    constructor(private httpClient: HttpClient) { }
    
    getcontactsList(): Observable<contact[]>{
      return this.httpClient.get<contact[]>(`${this.baseURL}/all`);
    }
  
    createcontact(contact: contact): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}/add`, contact);
    }
  
    getcontactById(id: number): Observable<contact>{
      return this.httpClient.get<contact>(`${this.baseURL}/${id}`);
    }
  
  
    deletecontact(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
    }
  }