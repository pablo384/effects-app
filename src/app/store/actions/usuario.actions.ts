import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIO = '[USUARIO] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[USUARIO] Cargar usuario FAIL';
export const CARGAR_USUARIO_SUCCESS = '[USUARIO] Cargar usuario SUCCESS';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;
    constructor(public id: string) { }
}
export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;
    constructor(public payload: any) { }
}
export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;
    constructor(public usuario: Usuario) { }
}

export type usuarioAcciones =
    CargarUsuario |
    CargarUsuarioFail |
    CargarUsuarioSuccess;
