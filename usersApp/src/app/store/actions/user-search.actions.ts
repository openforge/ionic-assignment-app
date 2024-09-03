import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/users/models/user.model';

export const searchUser = createAction(
  '[User Search] Search User',
  props<{ login: string }>()
);

export const searchUserSuccess = createAction(
  '[User Search] Search User Success',
  props<{ user: User }>()
);

export const searchUserFailure = createAction(
  '[User Search] Search User Failure',
  props<{ error: any }>()
);

export const clearUserSearch = createAction('[User Search] Clear User Search');