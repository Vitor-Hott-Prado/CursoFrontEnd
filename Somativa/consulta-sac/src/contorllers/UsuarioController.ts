import Usuario from "@/models/Usuario";
import bcrypt from "bcryptjs";

export const UsuarioController = {
  // Cria médico (feito pela recepcionista)
  criarMedico: async (nome: string, email: string, senha: string) => {
    const existe = await Usuario.findOne({ email });
    if (existe) throw new Error("Email já cadastrado");

    const hashSenha = await bcrypt.hash(senha, 10);
    const medico = new Usuario({
      nome,
      email,
      senha,
      funcao: "medico"
    });

    await medico.save();
    return medico;
  },

  // Autenticação (login)
  autenticar: async (email: string, senha: string) => {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return null;

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return null;

    return usuario;
  },

  // Listar médicos (para a recepcionista)
  listarMedicos: async () => {
    return await Usuario.find({ funcao: "medico" });
  }
};
