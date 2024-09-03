import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/users/models/user.model';

export const loadUsers = createAction('[User List] Load Users');

export const loadUsersSuccess = createAction(
  '[User List] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User List] Load Users Failure',
  props<{ error: any }>()
);