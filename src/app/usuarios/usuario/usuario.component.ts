import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { CargarUsuario } from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  subs: Subscription = new Subscription();
  loading: boolean;
  error: any;
  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.router.params.subscribe(
      params => {
        const id = params['id'];
        this.store.dispatch(new CargarUsuario(id));
        // console.log(id);

      }
    );
    this.subs = this.store.select('usuario').subscribe(
      user => {
        this.error = user.error;
        this.loading = user.loading;
        this.usuario = user.user;
      }
    );
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
