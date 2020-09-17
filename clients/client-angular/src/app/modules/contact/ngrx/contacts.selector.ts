import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactsStateModel } from '../models/contacts-state.model';

const contactsFeature = createFeatureSelector<ContactsStateModel[]>('contact');

export const selectContacts = createSelector(contactsFeature, contacts => contacts)
