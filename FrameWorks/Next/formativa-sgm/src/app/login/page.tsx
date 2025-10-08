"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import { GET, POST } from "../api/usuarios/route";

 //arquivo de componee cliente-side  

export default function  LoginPage(){
    //campo para digitação do email
    const [email, setEmail] = useState("");
    //campo para ditigar a senha
    const[senha, setSenha] = useState("");
    //campo mensagem erro
    const [erro, setErro] = useState("");

    //controle das rotas de navegação
    const route = useRouter();

    //método para enviar o login 
    const handleLogin = async (e: React.FormEvent) =>{//controle dos eventos do Formulario 
    e.preventDefault();//evita o recaregameno da página
    setErro(""); //lima a mensagem de errp
    
    
    try {
        const resposta = await fetch(
            "api/ususios/loin", {
                method: "POST", 
                headers: {"Content-Type":"applicatio/json"},
                body: JSON.stringify({email, senha})
            }
        );
        // analise a reposta da solicitação
        const data = await resposta.json()
        if(data.succss){
            //armazenas as informçoes do usuario logado no Localstorage
            localStorage.setItem("token", data.token);
            localStorage.setItem("funcao", data.usuario.funcao);
            localStorage.setItem("Nome",data.usuario.nome);
            route.push("/dashboard")
        }else{
            const erroData = data.error();
            setErro(erroData.messae || "FAlha de Login");
        }
    } catch (error) {
        console.error("erro de Login",error);
        setErro("Erro de Servidor"+error)
        
    }
     }
      // REACTDOM
   return(
    <div className="center">
        <h2>Login</h2>
        {erro &&<p style={{color:"red"}}>{erro}</p>}
        <form onSubmit={handleLogin}>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="senha">
                <label htmlFor="senha">Senha</label>
                <input type="Senha" value={email}
                onChange={(e)=> setSenha(e.target.value)}/>
            </div>
            <button type="submit">Entrar</button>
        </form>
    </div>
   )


    }