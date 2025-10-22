import Paciente from "@/models/Paciente";

export const PacienteController = {
  cadastrar: async (nome: string, email?: string, telefone?: string) => {
    if (!nome) return { success: false, error: "Nome é obrigatório." };

    const existe = email ? await Paciente.findOne({ email }) : null;
    if (existe) return { success: false, error: "Paciente já existe." };

    const paciente = new Paciente({ nome, email, telefone });
    await paciente.save();

    return { success: true, data: paciente };
  },

  listarTodos: async () => {
    const pacientes = await Paciente.find();
    return { success: true, data: pacientes };
  },

  buscarPorId: async (id: string) => {
    const paciente = await Paciente.findById(id);
    if (!paciente) return { success: false, error: "Paciente não encontrado." };
    return { success: true, data: paciente };
  },

  atualizar: async (id: string, dados: { nome?: string; email?: string; telefone?: string }) => {
    const paciente = await Paciente.findByIdAndUpdate(id, dados, { new: true });
    if (!paciente) return { success: false, error: "Paciente não encontrado." };
    return { success: true, data: paciente };
  },
};
