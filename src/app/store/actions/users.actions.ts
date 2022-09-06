
import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/users.model";

export const loadUsers = createAction('[Users] Cargar Users');

export const loadUsersSuccess = createAction(
    '[Users] Cargar Users Success',
    props<{users: User[]}>()
);

export const loadUsersError = createAction(
    '[Users] Cargar Users Error',
    props<{payload: any}>()
);