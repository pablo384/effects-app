import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor(
    public userS: UsuarioService
  ) { }

  ngOnInit() {
    this.userS.getUsers().subscribe(
      users => {
        this.usuarios = users;
        console.log(users);
      }
    );
  }

}
