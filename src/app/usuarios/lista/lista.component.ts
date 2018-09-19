import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  constructor(
    public userS: UsuarioService
  ) { }

  ngOnInit() {
    this.userS.getUsers().subscribe(
      users => console.log(users)
    );
  }

}
