import { UserState } from 'src/app/store/state/user.state';
import { UserSearchState } from './store/state/user-search.state';

export interface AppState {
  users: UserState;
  userSearch: UserSearchState;
}