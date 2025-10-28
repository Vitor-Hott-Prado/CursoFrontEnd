// services/consultaService.ts
import connectMongo from "@/services/mongodb";
import Consulta from "@/models/Consulta";

export const criar = async (dados: any) => {
  await connectMongo();
  return await Consulta.create(dados);
};

export const listar = async () => {
  await connectMongo();
  return await Consulta.find({})
    .populate('pacienteId')
    .populate('medicoId');
};

export const listarPorMedico = async (medicoId: string) => {
  await connectMongo();
  return await Consulta.find({ medicoId })
    .populate('pacienteId')
    .populate('medicoId');
};

export const verificarDisponibilidade = async (medicoId: string, data: string, hora: string) => {
  await connectMongo();
  const consultaConflitante = await Consulta.findOne({
    medicoId,
    data,
    hora,
    status: { $ne: 'cancelada' }
  });
  return !consultaConflitante; // true = disponível, false = ocupado
};