import connectMongo from "@/services/mongodb";
import Consulta, { IConsulta } from "@/models/Consulta";

// Criar consulta
export const criar = async (paciente: string, medico: string, data: Date, descricao?: string) => {
  await connectMongo();
  const novaConsulta = new Consulta({ paciente, medico, data, descricao });
  return await novaConsulta.save();
};

// Listar todas as consultas
export const listar = async () => {
  await connectMongo();
  return await Consulta.find([]).populate("paciente").populate("medico");
};

// Buscar consulta por ID
export const buscarPorId = async (id: string) => {
  await connectMongo();
  return await Consulta.findById(id).populate("paciente").populate("medico");
};

// Atualizar consulta
export const atualizar = async (id: string, data: Partial<IConsulta>) => {
  await connectMongo();
  return await Consulta.findByIdAndUpdate(id, data, { new: true });
};

// Deletar consulta
export const deletar = async (id: string) => {
  await connectMongo();
  return await Consulta.findByIdAndDelete(id);
};
