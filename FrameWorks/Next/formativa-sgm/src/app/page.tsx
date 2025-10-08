"use client";

//direcionar par página de login

export default function Home(){
  //userEfect => criar um usuario admin ao carregr o site 
  return(
    <div>
      <h1>Bem-Vindo ao Sistema de Gestão de Manutenção</h1>
      <p>Por favor, faça login para continuar</p>
      <a href="/login">Ir para Login</a>
    </div>
  );
}