import { Component, OnInit, Input } from '@angular/core';
import { ContactsStateModel } from '../../models/contacts-state.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: ContactsStateModel;
  constructor() { }

  ngOnInit() {
    console.log(this.contact);
  }
  makeUpperCase(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

}
