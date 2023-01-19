import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contact } from 'src/app/Model/contact.model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts!: contact[];
  contact: contact = new contact();



  constructor(private contactsService: ContactService) { }

  ngOnInit(): void {
    this.getcontacts();
  }

  private getcontacts(){
    this.contactsService.getcontactsList().subscribe(data => {
      this.contacts = data;
    });
  }


  deletecontacts(id: number){
    this.contactsService.deletecontact(id).subscribe( data => {
      console.log(data);
      this.getcontacts();
    })
  }
 

 

}
