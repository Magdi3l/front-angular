import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/usuario/usuario.service';
import { Usuario } from '../../interface/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Usuario[] = [];
  selectedUser: any = null;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.usuarioService.getAll().subscribe((data:Usuario[])=>{
      this.users = data;
    });
  }


  deleteUser(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioService.deleteUser(id).subscribe(() => {
        this.users = this.users.filter(user => user.id !== id);
      });
    }
  }

  editUser(user: any) {
    this.selectedUser = { ...user };
  }

  updateUsuario() {
    this.usuarioService.updateUser(this.selectedUser).subscribe(
      () => {
        this.cargarUsuario();
        this.selectedUser = null;
      },
      (error) => console.error('Error al actualizar el usuario', error)
    );
  }

  partialUpdateUsuario() {
    this.usuarioService.partialUpdateUser(this.selectedUser.id, { email: this.selectedUser.email }).subscribe(
      () => {
        this.cargarUsuario();
        this.selectedUser = null; 
      },
      (error) => console.error('Error al actualizar parcialmente el usuario', error)
    );
  }
}
