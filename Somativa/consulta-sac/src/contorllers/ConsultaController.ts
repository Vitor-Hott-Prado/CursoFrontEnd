import Consulta from "@/models/Consulta";

export const ConsultaController = {
  agendar: async (pacienteId: string, medicoId: string, dataHora: Date, duracaoMinutos = 30) => {
    if (!pacienteId || !medicoId || !dataHora) {
      return { success: false, error: "Paciente, médico e data/hora são obrigatórios." };
    }

    // Verifica conflito de horário
    const inicio = new Date(dataHora);
    const fim = new Date(inicio.getTime() + duracaoMinutos * 60000);

    const conflito = await Consulta.findOne({
      medicoId,
      status: { $ne: "cancelada" },
      $or: [
        { dataHora: { $lt: fim, $gte: inicio } },
        { $expr: { $and: [
            { $lt: ["$dataHora", inicio] },
            { $gt: [{ $add: ["$dataHora", { $multiply: ["$duracaoMinutos", 60000] }] }, inicio] }
          ]}
        }
      ]
    });

    if (conflito) return { success: false, error: "Conflito de horário." };

    const consulta = new Consulta({ pacienteId, medicoId, dataHora: inicio, duracaoMinutos });
    await consulta.save();

    return { success: true, data: consulta };
  },

  listarTodas: async () => {
    const consultas = await Consulta.find();
    return { success: true, data: consultas };
  },

  listarPorMedico: async (medicoId: string) => {
    if (!medicoId) return { success: false, error: "ID do médico inválido." };
    const consultas = await Consulta.find({ medicoId });
    return { success: true, data: consultas };
  },

  atualizarStatus: async (id: string, status: string) => {
    const statusValido = ["agendada","confirmada","realizada","cancelada"];
    if (!statusValido.includes(status.toLowerCase())) {
      return { success: false, error: "Status inválido." };
    }

    const consulta = await Consulta.findByIdAndUpdate(id, { status: status.toLowerCase() }, { new: true });
    if (!consulta) return { success: false, error: "Consulta não encontrada." };
    return { success: true, data: consulta };
  }
};
