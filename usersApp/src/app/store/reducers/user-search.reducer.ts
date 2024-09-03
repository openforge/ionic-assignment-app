import { createReducer, on } from '@ngrx/store';
import { searchUser, searchUserSuccess, searchUserFailure, clearUserSearch } from 'src/app/store/actions/user-search.actions';
import { initialUserSearchState } from 'src/app/store/state/user-search.state';

export const userSearchReducer = createReducer(
    initialUserSearchState,
    on(searchUser, (state) => ({ ...state, loading: true, error: null })),
    on(searchUserSuccess, (state, { user }) => ({ ...state, loading: false, user })),
    on(searchUserFailure, (state, { error }) => ({ ...state, loading: false, user: null, error })),
    on(clearUserSearch, () => initialUserSearchState)
  );