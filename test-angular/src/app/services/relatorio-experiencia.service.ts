import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RelatorioExperiencia } from '../models/relatorio-experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class RelatorioExperienciaService {
  private apiUrl = 'http://localhost:8080/relatorios'; // Backend API

  constructor(private http: HttpClient) {}

  listarRelatorios(): Observable<RelatorioExperiencia[]> {
    return this.http.get<RelatorioExperiencia[]>(this.apiUrl);
  }

  obterRelatorioPorId(id: number): Observable<RelatorioExperiencia> {
    return this.http.get<RelatorioExperiencia>(`${this.apiUrl}/${id}`);
  }

  criarRelatorio(relatorio: RelatorioExperiencia): Observable<RelatorioExperiencia> {
    return this.http.post<RelatorioExperiencia>(this.apiUrl, relatorio);
  }

  atualizarRelatorio(id: number, relatorio: RelatorioExperiencia): Observable<RelatorioExperiencia> {
    return this.http.put<RelatorioExperiencia>(`${this.apiUrl}/${id}`, relatorio);
  }

  deletarRelatorio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
