import { Injectable } from '@angular/core';
import {HttpClient}from "@angular/common/http";
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class VagasService {
  private apiUrl = 'http://localhost:3005/vagas'; // Endereço da API

  constructor(private http: HttpClient) {}

  //criar os métodospara conexaõ com apiRest

  // get -- obert a lista de vagas
  getVagas(): Observable<Vaga[]> {
    //observable -> rxjs => tradutor de Json -> typescript
    return this.http.get<Vaga[]>(this.apiUrl); //conecta com a API para pegar os Dados
  }

  // post --
  postVaga(vaga: Vaga): Observable<Vaga[]>{ //méto para enviar os dados paa API
    return this.http.post<Vaga[]>(this.apiUrl,vaga);
    //Obervable -> rxjs = > tradutos de Json -> typescript
  }

  //put
  //nomeDoMétodo(parametros)
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]>{//coleção chave -> valor
    //http://localhost:3004/vagas/XXXX
    const url = this.apiUrl+"/"+id; //contrui a url join (apirUrl+id)
    return this.http.put<Vaga[]>(url, vaga);
  }

  //delete

  deleteVaga(id:any): Observable<Vaga[]>{
    const url = this.apiUrl+"/"+id;
    return this.http.delete<Vaga[]>(url);
  }
}
