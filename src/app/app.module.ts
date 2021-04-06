import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './phonebook/contacts/contacts.component';
import { ContactsItemComponent } from './phonebook/contacts-item/contacts-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './phonebook/layout/header/header.component';
import { AddContactsComponent } from './phonebook/add-contacts/add-contacts.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './phonebook/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsItemComponent,
    HeaderComponent,
    AddContactsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
