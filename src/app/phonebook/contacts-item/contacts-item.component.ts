import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { Contacts } from 'src/app/models/contacts';
import { ContactsService } from '../../services/contacts.service' ;

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.css']
})
export class ContactsItemComponent implements OnInit {
  
  @Input() contacts:Contacts;
  @Output() deleteContact: EventEmitter<Contacts> = new EventEmitter();

  constructor(private contactsService:ContactsService) { }

  ngOnInit(): void {
  }

  //setting dynamic classes

  setClasses(){
    let classes = {
      basicCSS : true,
      'isCloseFriend': this.contacts.isCloseFriend
    }
    return classes;
  }

  onEdit(contacts){
    // console.log('edit pressed');
    this.contactsService.onEdit(contacts).subscribe(contacts=>console.log(contacts));
  }

  
  onDelete(contacts){
    // console.log('delete pressed');
    this.deleteContact.emit(contacts);
  }

}
