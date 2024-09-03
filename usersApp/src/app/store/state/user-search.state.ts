import { User } from 'src/app/modules/users/models/user.model';

export interface UserSearchState {
  user: User | null;
  loading: boolean;
  error: any;
}

export const initialUserSearchState: UserSearchState = {
  user: null,
  loading: false,
  error: null,
};