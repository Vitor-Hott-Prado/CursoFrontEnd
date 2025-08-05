import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap, throwError,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http;//localhost:3005/usuarios";
  private readonly CHAVE_AUTH = 'usuarioLogado';


  // Construtor 
  constructor(private router: Router, private http: HttpClient) { }

//Métodos 

//Registar

  registrar(usuario: any):Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(res => {
        if(res.length>0){
          return throwError(()=>new Error ("Usuário Já Existe."));
        }
        return this.http.post<any>(this.apiUrl, usuario);
      })
    );
  }


// Login 

  login(credenciais: any):Observable<boolean>{
    return this.http.get<any[]>(
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
        map(usuario => {
          if (usuario.length > 0) {
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario[0]));
            return true;
          }
          return false;
        })
    );
  }

//Logout

lougout(){
  localStorage.removeItem(this.CHAVE_AUTH);
  this.router.navigate(["/login"]);
}


// Esta Autenticado

estaAutenticado(): boolean{
  return !!localStorage.getItem(this.CHAVE_AUTH);

}

//Usuario Atuatal

usuarioAtual(): any{
  return JSON.parse(localStorage.getItem(this.CHAVE_AUTH)|| "{}")
  
}




}





