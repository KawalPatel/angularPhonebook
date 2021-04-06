import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  @Output() addContacts:EventEmitter<any> = new EventEmitter();

  name:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const contacts = {
      name:this.name
    }
  
    this.addContacts.emit(contacts);
  
  }

}
