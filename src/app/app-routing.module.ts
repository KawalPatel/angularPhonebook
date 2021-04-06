import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './phonebook/contacts/contacts.component';
import { AboutComponent } from './phonebook/pages/about/about.component';

const routes: Routes = [
  {path:'',component:ContactsComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
