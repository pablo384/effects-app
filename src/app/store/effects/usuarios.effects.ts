import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as fromActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
    constructor(
        private actions$: Actions,
        public usuariosS: UsuarioService
    ) { }

    @Effect()
    cargarUsuarios$ = this.actions$
        .ofType(fromActions.CARGAR_USUARIOS)
        .pipe(
            switchMap(
                () => {
                    return this.usuariosS.getUsers()
                    .pipe(
                        map(users => new fromActions.CargarUsuariosSuccess(users)),
                        catchError(error => of( new fromActions.CargarUsuariosFail(error)))
                    );
                }
            )
        );
}


