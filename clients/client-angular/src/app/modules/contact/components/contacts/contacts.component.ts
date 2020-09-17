import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactsStateModel } from '../../models/contacts-state.model';
import { Observable } from 'rxjs';
import { selectContacts } from '../../ngrx/contacts.selector';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contact$: Observable<ContactsStateModel[]>
  constructor(private store: Store<ContactsStateModel>) { }

  ngOnInit() {
    this.contact$ = this.store.select(selectContacts);
    this.contact$.subscribe(console.log)
  }

}
