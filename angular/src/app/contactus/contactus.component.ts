import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contact } from '../Model/contact.model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class contactusComponent implements OnInit {
  contact: contact = new contact();
  constructor( private contactsService : ContactService , private router : Router) { }

  ngOnInit(): void {
  }
  savecontact(){
    this.contactsService.createcontact(this.contact).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  
  onSubmit(){ 
    this.savecontact();
    window.location.reload()
   
  }

}
