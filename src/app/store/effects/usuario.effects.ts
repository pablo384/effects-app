import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as fromActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
    constructor(
        private actions$: Actions,
        public usuarioS: UsuarioService
    ) { }

    @Effect()
    cargarUsuario$ = this.actions$
        .ofType(fromActions.CARGAR_USUARIO)
        .pipe(
            switchMap(
                action => {
                    return this.usuarioS.getUserbyId(action['id'])
                        .pipe(
                            map(user => new fromActions.CargarUsuarioSuccess(user)),
                            catchError(error => of(new fromActions.CargarUsuarioFail(error)))
                        );
                }
            )
        );
}


