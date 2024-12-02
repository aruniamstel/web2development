import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../shared/models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private apiUrl = 'http://localhost:8081/categorias'; // Ajuste a porta conforme necessário

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/listar`);
  }

  inserir(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, categoria);
  }

  buscarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiUrl}/buscar/${id}`);
  }

  atualizar(id: number, categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.apiUrl}/alterar/${categoria.id}`, categoria);
  }

  remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remover/${id}`);
  }
}
