// src/scripts/criarRecepcionista.ts
import Usuario from "../models/Usuario";
import connectMongo from "../services/mongodb.js";
import bcrypt from "bcryptjs";

const criarRecepcionista = async () => {
  try {
    // Conecta ao MongoDB
    await connectMongo();

    const recepEmail = "secretaria@clinica.com";

    // Verifica se já existe
    const existe = await Usuario.findOne({ email: recepEmail });
    if (!existe) {
      const hashSenha = await bcrypt.hash("secret123", 10);
      const recepcionista = new Usuario({
        nome: "Secretária",
        email: recepEmail,
        senha: hashSenha,
        funcao: "recepcionista"
      });

      await recepcionista.save();
      console.log("Usuário Recepcionista criado com sucesso!");
    } else {
      console.log("Usuário Recepcionista já existe.");
    }
  } catch (error) {
    console.error("Erro ao criar recepcionista:", error);
  }
};

// Executa a função
criarRecepcionista();
