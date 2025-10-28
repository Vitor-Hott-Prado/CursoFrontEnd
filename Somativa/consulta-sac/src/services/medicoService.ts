import connectMongo from "@/services/mongodb";
import Medico, { IMedico } from "@/models/Medico";

// Criar médico
export const criar = async (nome: string, especialidade: string) => {
  await connectMongo();
  const novoMedico = new Medico({ nome, especialidade });
  return await novoMedico.save();
};

// Listar todos (pequena correção)
export const listar = async () => {
  await connectMongo();
  return await Medico.find({}); // ✅ Mudei de [] para {}
};

// Buscar por ID
export const buscarPorId = async (id: string) => {
  await connectMongo();
  return await Medico.findById(id);
};

// Atualizar
export const atualizar = async (id: string, data: Partial<IMedico>) => {
  await connectMongo();
  return await Medico.findByIdAndUpdate(id, data, { new: true });
};

// Deletar (sugestão: usar desativação)
export const deletar = async (id: string) => {
  await connectMongo();
  // Opção 1: Deletar permanentemente
  return await Medico.findByIdAndDelete(id);

};