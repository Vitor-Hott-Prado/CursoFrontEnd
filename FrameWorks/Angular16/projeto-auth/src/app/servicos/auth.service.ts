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

//fUNÇAO PARA REGISTRAR UM NO USUARIO

  registrar(usuario: any):Observable<any> {
    // antes de registrar -> verificar se ususario já esta  cadastrado
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(res => {
        if(res.length>0){
          //criando um erro para o sistema -> para que o erro seja tratado, rodar a função dentro de um try/cath
          return throwError(()=>new Error ("Usuário Já Existe.")); // paraa o programa aqui, se ususario já existi
        }
        //caso contrário -> cadastrar o usuário novo
        return this.http.post<any>(this.apiUrl, usuario);
      })
    );
  }


// Login - Função

  login(credenciais: any):Observable<boolean>{

    return this.http.get<any[]>(
     //paasar  oemail e a senha para pocuar o usuario no BD
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
        map(usuario => {
          //usuario encontrado
          if (usuario.length > 0) {
                  // grava no aramazenamento interno do navegador(a chave de autenticação e as informaç~eos do usuário)
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario[0]));
            return true;
          }
          //caso não seja encontrado - > retorna falso 
          return false;
        })
    );
  }

//Logout

lougout(){
  //lompo o armazenamento interno
  localStorage.removeItem(this.CHAVE_AUTH);
  //redirecionar para tela de logn/ home
  this.router.navigate(["/login"]);
}


// Esta Autenticado - verificar se o usuario esta autenticado

estaAutenticado(): boolean{
  //uso de dupla negação => transformo em uma booleana
  // !! - > retorna vazio - > FontFaceSetLoadEvent, agora se torna texto - é true
  return !!localStorage.getItem(this.CHAVE_AUTH);

}

//Usuario função para pegar as informaç~~oes do usuario 

usuarioAtual(): any{
  //conveerte para json as informações do usurio
  return JSON.parse(localStorage.getItem(this.CHAVE_AUTH)|| "{}")
  
}




}





