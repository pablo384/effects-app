import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as fromActions from '../actios';
import { map } from 'rxjs/operators';

@Injectable()
export class UsuariosEffects {
    constructor(
        private actions$: Actions
    ) { }

    @Effect({dispatch: false})
    cargarUsuarios$ = this.actions$
        .ofType(fromActions.CARGAR_USUARIOS)
        .pipe(
            map(action => {
                console.log(action);
                return action;
            })
        );
}


