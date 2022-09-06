
import { Action, createReducer, on} from '@ngrx/store'
import { User } from 'src/app/models/users.model';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions/users.actions';

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const UsersInitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _usersReducer = createReducer(
    UsersInitialState,
    on( loadUsers , state => ({ ...state, loading: true })),

    on( loadUsersSuccess , (state, { users }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        users: [ ...users ]
     })),

     on( loadUsersError , (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
     })),
);

export function usersReducer(state: UsersState | undefined, action: Action) {
    return _usersReducer(state, action);
}