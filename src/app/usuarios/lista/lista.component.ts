import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { CargarUsuarios } from '../../store/actios';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor(
    // public userS: UsuarioService
    // new actions.cargarUsuarios()
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.userS.getUsers().subscribe(
    //   users => {
    //     this.usuarios = users;
    //     console.log(users);
    //   }
    // );
    this.store.dispatch(new CargarUsuarios());
  }

}
