import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Curriculo } from '../models/curriculo.model'; // Importa o seu modelo de Curriculo

@Injectable({
  providedIn: 'root' // Isso faz com que o serviço esteja disponível em toda a aplicação
})
export class CurriculoService {
  // Define a URL base da API para os currículos. Ajuste conforme a URL do seu backend.
  private apiUrl = 'http://localhost:3004/curriculos'; // Exemplo para json-server

  constructor(private http: HttpClient) { }

  /**
   * Obtém todos os currículos do backend.
   * Garante que os dados brutos da API sejam convertidos em instâncias da classe Curriculo.
   * @returns Um Observable que emite um array de objetos Curriculo.
   */
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      // Mapeia cada item da resposta para uma instância de Curriculo usando fromMap
      map(data => data.map(item => Curriculo.fromMap(item))),
      // Captura e trata quaisquer erros HTTP
      catchError(this.handleError)
    );
  }

  /**
   * Obtém um currículo específico pelo seu ID.
   * Converte a resposta da API para uma instância da classe Curriculo.
   * @param id O ID do currículo a ser recuperado.
   * @returns Um Observable que emite um objeto Curriculo.
   */
  getCurriculoById(id: number): Observable<Curriculo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      // Mapeia a resposta para uma instância de Curriculo
      map(data => Curriculo.fromMap(data)),
      catchError(this.handleError)
    );
  }

  /**
   * Obtém currículos filtrados por ID de usuário.
   * @param usuarioId O ID do usuário para filtrar os currículos.
   * @returns Um Observable que emite um array de objetos Curriculo.
   */
  getCurriculoByUsuarioId(usuarioId: number): Observable<Curriculo[]> {
    const url = `${this.apiUrl}?usuarioId=${usuarioId}`;
    return this.http.get<any[]>(url).pipe(
      map(data => data.map(item => Curriculo.fromMap(item))),
      catchError(this.handleError)
    );
  }

  /**
   * Cria um novo currículo no backend.
   * Adiciona `dataCriacao` e `dataAtualizacao` antes de enviar.
   * @param curriculo O objeto Curriculo a ser criado.
   * @returns Um Observable que emite o objeto Curriculo criado (com o ID e datas gerados/atualizados pela API).
   */
  createCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    const now = new Date().toISOString();
    // Cria uma nova instância para enviar, garantindo que as datas de criação/atualização sejam definidas.
    // Usamos um novo Curriculo para passar os valores ao construtor, que tem os parâmetros de data.
    const curriculoParaCriar = new Curriculo(
      null, // O ID será gerado pelo backend
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
      now, // dataCriacao
      now  // dataAtualizacao
    );

    // Envia o objeto convertido para um formato Map (JSON) para a API
    return this.http.post<any>(this.apiUrl, curriculoParaCriar.toMap()).pipe(
      // Mapeia a resposta da API (que já deve incluir o ID e as datas) para uma instância de Curriculo
      map(data => Curriculo.fromMap(data)),
      catchError(this.handleError)
    );
  }


  updateCurriculo(id: number, curriculo: Curriculo): Observable<Curriculo> {
    const url = `${this.apiUrl}/${id}`;
    const now = new Date().toISOString();

    // Cria uma nova instância do currículo com as informações atualizadas,
    // garantindo que as datas estejam corretas. A data de criação deve ser mantida
    // (se sua API a retornar) ou assumimos que o backend a mantém.
    const curriculoParaAtualizar = new Curriculo(
      id, // O ID deve ser o mesmo
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
      curriculo.dataCriacao, // Mantém a data de criação original
      now // Atualiza a data de atualização
    );

    // Envia o objeto convertido para um formato Map (JSON) para a API
    return this.http.put<any>(url, curriculoParaAtualizar.toMap()).pipe(
      // Mapeia a resposta da API para uma instância de Curriculo
      map(data => Curriculo.fromMap(data)),
      catchError(this.handleError)
    );
  }

  /**
   * Deleta um currículo do backend.
   * @param id O ID do currículo a ser deletado.
   * @returns Um Observable que emite uma resposta vazia (ou o que a API retornar em caso de sucesso).
   */
  deleteCurriculo(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Método privado para tratamento de erros HTTP.
   * Este método centraliza a lógica de tratamento de erros para todas as requisições HTTP do serviço.
   * @param error O HttpErrorResponse recebido do backend.
   * @returns Um Observable que lança um erro com uma mensagem amigável.
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente ou de rede.
      errorMessage = `Erro do cliente: ${error.error.message}`;
    } else {
      // O backend retornou um código de resposta de erro (ex: 404, 500).
      // O corpo da resposta pode conter detalhes adicionais.
      errorMessage = `Erro no servidor - Código: ${error.status}\nMensagem: ${error.message}`;
      if (error.error && error.error.message) {
        // Se a API retornar uma mensagem de erro específica no corpo
        errorMessage = `Erro no servidor - Código: ${error.status}\nMensagem da API: ${error.error.message}`;
      }
    }
    console.error('Erro no CurriculoService:', errorMessage);
    // Retorna um observable com um erro para que o componente que chamou o serviço possa tratá-lo
    return throwError(() => new Error(errorMessage));
  }
}