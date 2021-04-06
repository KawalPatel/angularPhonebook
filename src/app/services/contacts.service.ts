import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Contacts} from '../models/contacts';
import { Observable } from 'rxjs';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactsUrl:string='https://jsonplaceholder.typicode.com/users';
  contactsLimit = '?_limit=3';

  constructor(private http:HttpClient) { }


  //get Contacts
  getContacts():Observable<Contacts[]>{
   return this.http.get<Contacts[]>(`${this.contactsUrl}${this.contactsLimit}`);
  }


  //delete contact
  deleteContact(contacts:Contacts):Observable<Contacts>{
     const url = `${this.contactsUrl}/${contacts.id}`;
     return this.http.delete<Contacts>(url, httpOptions);
  }

  // add contact
  addContact(contacts:Contacts):Observable<Contacts>{
   return this.http.post<Contacts>(this.contactsUrl, contacts, httpOptions);

  }
  
  //edit contact pressed
  onEdit(contacts:Contacts):Observable<any>{
     const url = `${this.contactsUrl}/${contacts.id}`;
    return this.http.put(url, contacts, httpOptions);
  }

  
}

