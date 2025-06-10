import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model'; // Importa o modelo Curriculo


@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  // Define a URL base da API para os currículos, utilizando o environment.apiUrl.
  // Isso permite fácil configuração da porta do json-server (ex: http://localhost:3000/curriculos).
  private apiUrl = 'http://localhost:3004/curriculos';

  constructor(private http: HttpClient) {}



  getCurriculos(): Observable<Curriculo[]> {
    // Conecta com a API para obter todos os dados de currículos.
    return this.http.get<Curriculo[]>(this.apiUrl);
  }


  getCurriculoById(id: number): Observable<Curriculo> {
    const url = `${this.apiUrl}/${id}`; // Constrói a URL para o currículo específico (ex: /curriculos/1)
    return this.http.get<Curriculo>(url);
  }


  getCurriculoByUsuarioId(usuarioId: number): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(`${this.apiUrl}?usuarioId=${usuarioId}`);
  }


  createCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    const now = new Date().toISOString();
    // Cria uma nova instância de Curriculo com as datas de criação e atualização.
    // O ID é passado como null, pois será gerado pelo json-server.
    const curriculoComDatas = new Curriculo(
      null,
      curriculo.usuarioId,
      curriculo.nomeCompleto,
      curriculo.email,
      curriculo.telefone,
      curriculo.cpf,
      curriculo.dataNascimento,
      curriculo.cep,
      curriculo.formacaoAcademica,
      curriculo.experienciaProfissional,
      curriculo.habilidades,

    );
    // Envia o objeto convertido para o formato JSON usando toMap().
    return this.http.post<Curriculo>(this.apiUrl, curriculoComDatas.toMap());
  }


  updateCurriculo(id: number, curriculo: Curriculo): Observable<Curriculo> {
    const url = `${this.apiUrl}/${id}`; // Constrói a URL para o currículo específico (ex: /curriculos/1)
    const now = new Date().toISOString();
    // Cria uma nova instância com os dados atualizados, mantendo o ID e a data de criação original,
    // mas atualizando a data de atualização.
    const curriculoAtualizado = new Curriculo(
      id,
      curriculo.usuarioId,
      curriculo.nomeCompleto,
      curriculo.email,
      curriculo.telefone,
      curriculo.cpf,
      curriculo.dataNascimento,
      curriculo.cep,
      curriculo.formacaoAcademica,
      curriculo.experienciaProfissional,
      curriculo.habilidades,
    );
    // Envia o objeto convertido para o formato JSON usando toMap().
    return this.http.put<Curriculo>(url, curriculoAtualizado.toMap());
  }

  deleteCurriculo(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`; // Constrói a URL para o currículo específico (ex: /curriculos/1)
    return this.http.delete<void>(url);
  }
}
