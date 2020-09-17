import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { contactReducer } from './ngrx/reducer';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';



@NgModule({
  declarations: [ContactsComponent, ContactItemComponent],
  exports: [ContactsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('contact', contactReducer)
  ]
})
export class ContactModule { }
