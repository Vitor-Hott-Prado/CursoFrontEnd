import Usuario from "@/models/Usuario";
import connectMongo from "@/services/mongodb";
import bcrypt from "bcryptjs";

export const criarRecepcionista = async () => {
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
};

criarRecepcionista().catch(console.error);
