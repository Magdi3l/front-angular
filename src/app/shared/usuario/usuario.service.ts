import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../interface/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl: string = 'http://localhost:4300/usuarios';
  private apiUrlRecent: string = 'http://localhost:4300/usuarios/reciente';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  create(usuario: Partial<Usuario>): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  getRecent(): Observable<Usuario> {
    return this.http.get<Usuario>(this.apiUrlRecent);
  }


  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${user.id}`, user);
  }

  partialUpdateUser(id: number, updatedFields: Partial<Usuario>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, updatedFields);
  }

}
