import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { searchUser, searchUserSuccess, searchUserFailure } from 'src/app/store/actions/user-search.actions';
import { User } from 'src/app/modules/users/models/user.model';

@Injectable()
export class UserSearchEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  searchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchUser),
      mergeMap((action) =>
        this.http.get<User>(`https://api.github.com/users/${action.login}`).pipe(
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