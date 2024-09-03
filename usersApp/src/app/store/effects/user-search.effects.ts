import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { searchUser, searchUserSuccess, searchUserFailure } from 'src/app/store/actions/user-search.actions';
import { UserService } from 'src/app/modules/users/services/user.service';

@Injectable()
export class UserSearchEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  searchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchUser),
      mergeMap((action) =>
        this.userService.searchUser(action.login).pipe( 
          map((user) => searchUserSuccess({ user })),
          catchError((error) => {
            if (error.status === 404) {
              return of(searchUserFailure({ error: 'User not found' }));
            }
            return of(searchUserFailure({ error }));
          })
        )
      )
    )
  );
}