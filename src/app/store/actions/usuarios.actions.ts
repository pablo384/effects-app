import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIOS = '[USUARIOS] Cargar usuario';
export const CARGAR_USUARIOS_FAIL = '[USUARIOS] Cargar usuario FAIL';
export const CARGAR_USUARIOS_SUCCESS = '[USUARIOS] Cargar usuario SUCCESS';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}
export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;
    constructor(public payload: any) { }
}
export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;
    constructor(public usuarios: Usuario[]) { }
}

export type usuariosAcciones =
    CargarUsuarios |
    CargarUsuariosFail |
    CargarUsuariosSuccess;
