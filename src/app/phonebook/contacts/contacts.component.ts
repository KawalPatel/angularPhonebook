import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../models/contacts';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts:Contacts[];

  constructor(private contactsService:ContactsService) { }

  ngOnInit(){
    this.contactsService.getContacts().subscribe(contacts=>{this.contacts = contacts;
 });
  }

  deleteContact(contacts:Contacts){ 
    // console.log('delete me');

    //deleting from UI
    this.contacts = this.contacts.filter(t=>t.id !== contacts.id); 
    //deleting from API server
    this.contactsService.deleteContact(contacts).subscribe();
  }

  addContacts(contacts:Contacts){

    this.contactsService.addContact(contacts).subscribe(contacts=>{
      this.contacts.push(contacts);
    });
  }
}
