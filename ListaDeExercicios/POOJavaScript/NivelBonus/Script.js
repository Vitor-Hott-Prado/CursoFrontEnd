// 🕒 Classe Relógio
class Relogio {
    constructor(elemento) {
      this.elemento = elemento;
    }
  
    atualizar() {
      const agora = new Date();
      this.elemento.textContent = agora.toLocaleTimeString();
    }
  
    iniciar() {
      this.atualizar();
      setInterval(() => this.atualizar(), 1000);
    }
  }
  
  // ✅ Classe FormularioUsuario
  class FormularioUsuario {
    constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
    }
  
    validar() {
      if (!this.nome) return "Nome é obrigatório.";
      if (!this.email.includes("@")) return "Email inválido.";
      if (this.senha.length < 6) return "Senha deve ter pelo menos 6 caracteres.";
      return "";
    }
  }
  
  // 🎯 Classe Jogo de Adivinhação
  class Jogo {
    constructor() {
      this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
      this.tentativas = 0;
    }
  
    tentar(numero) {
      this.tentativas++;
      if (numero === this.numeroSecreto) {
        return `🎉 Acertou em ${this.tentativas} tentativa(s)!`;
      } else if (numero < this.numeroSecreto) {
        return "🔼 O número é maior.";
      } else {
        return "🔽 O número é menor.";
      }
    }
  }
  
  // ⏱ Iniciar Relógio
  const relogio = new Relogio(document.getElementById("relogio"));
  relogio.iniciar();
  
  // 📋 Formulário
  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const msg = document.getElementById("mensagem");
  
    const usuario = new FormularioUsuario(nome, email, senha);
    const erro = usuario.validar();
  
    msg.style.color = erro ? "red" : "green";
    msg.textContent = erro || "Formulário enviado com sucesso!";
  });
  
  // 🎯 Jogo
  const jogo = new Jogo();
  function tentar() {
    const numero = parseInt(document.getElementById("palpite").value);
    const resultado = jogo.tentar(numero);
    document.getElementById("resultado").textContent = resultado;
  }
  