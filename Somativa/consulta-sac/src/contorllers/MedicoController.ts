import * as medicoService from "@/services/medicoService";
import connectMongo from "@/services/mongodb";

export const MedicoController = {
  // 🔹 Criar médico
  criar: async (nome: string, especialidade: string) => {
    if (!nome || !especialidade) {
      return { success: false, error: "Nome e especialidade são obrigatórios." };
    }

    await connectMongo();
    const medico = await medicoService.criar(nome, especialidade);
    return { success: true, data: medico };
  },

  // 🔹 Listar todos os médicos
  listar: async () => {
    await connectMongo();
    const medicos = await medicoService.listar();
    return { success: true, data: medicos };
  },

  // 🔹 Buscar médico por ID
  buscarPorId: async (id: string) => {
    await connectMongo();
    const medico = await medicoService.buscarPorId(id);
    if (!medico) return { success: false, error: "Médico não encontrado." };
    return { success: true, data: medico };
  },

  // 🔹 Atualizar médico
  atualizar: async (id: string, nome?: string, especialidade?: string) => {
    await connectMongo();
    const data: any = {};
    if (nome) data.nome = nome;
    if (especialidade) data.especialidade = especialidade;

    const medicoAtualizado = await medicoService.atualizar(id, data);
    if (!medicoAtualizado)
      return { success: false, error: "Médico não encontrado para atualizar." };
    return { success: true, data: medicoAtualizado };
  },

  // 🔹 Deletar médico
  deletar: async (id: string) => {
    await connectMongo();
    const medicoDeletado = await medicoService.deletar(id);
    if (!medicoDeletado)
      return { success: false, error: "Médico não encontrado para deletar." };
    return { success: true, message: "Médico removido com sucesso." };
  },
};
