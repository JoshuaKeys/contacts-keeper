import { createReducer } from "@ngrx/store";
import { ContactsStateModel } from '../models/contacts-state.model';

const initialState: ContactsStateModel[] = [
  {
    "type": "personal",
    "date": "1600368930902",
    "_id": "5f63b152cc10d773ce0d9009",
    "name": "Ted Johnson",
    "email": "ted.jhonson@test.com",
    "phone": "+380999805529",
    "user": "5f63a72183f0606a2ed59376",
    "__v": 0
  },
  {
    "type": "professional",
    "date": "1600368811670",
    "_id": "5f63b0b1ddfe356feac164a5",
    "name": "Sarah Smith",
    "email": "sarah.smith@test.com",
    "phone": "+380991702955",
    "user": "5f63a72183f0606a2ed59376",
    "__v": 0
  }
];

const _contactReducer = createReducer(initialState);

export function contactReducer(state, action) {
  return _contactReducer(state, action)
}
