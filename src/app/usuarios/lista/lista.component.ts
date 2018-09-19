import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { CargarUsuarios } from '../../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit, OnDestroy {

  usuarios: Usuario[] = [];
  subs: Subscription = new Subscription();
  loading: boolean;
  error: any;

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
    this.subs = this.store.select('usuarios').subscribe(
      usuarios => {
        this.error = usuarios.error;
        this.loading = usuarios.loading;
        this.usuarios = usuarios.users;
      }
    );
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
