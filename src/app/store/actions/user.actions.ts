import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/users.model";

export const loadUser = createAction(
    '[User] Cargar User',
    props<{id: string}>()
    );

export const loadUserSuccess = createAction(
    '[User] Cargar User Success',
    props<{user: User}>()
);

export const loadUserError = createAction(
    '[User] Cargar User Error',
    props<{payload: any}>()
);