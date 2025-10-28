// controllers/ConsultaController.ts
import * as consultaService from "@/services/consultaService";

export const ConsultaController = {
  // 🔹 Criar consulta com validação
  criar: async (pacienteId: string, medicoId: string, data: string, hora: string) => {
    try {
      if (!pacienteId || !medicoId || !data || !hora) {
        return { success: false, error: "Todos os campos são obrigatórios" };
      }

      // Verificar disponibilidade
      const disponivel = await consultaService.verificarDisponibilidade(medicoId, data, hora);
      
      if (!disponivel) {
        return { success: false, error: "Médico já possui consulta neste horário" };
      }

      // Criar consulta
      const consulta = await consultaService.criar({
        pacienteId,
        medicoId, 
        data,
        hora,
        status: "agendada"
      });

      return { 
        success: true, 
        message: "Consulta agendada com sucesso",
        data: consulta 
      };

    } catch (error: any) {
      return { 
        success: false, 
        error: error.message || "Erro ao agendar consulta" 
      };
    }
  },

  // 🔹 Listar todas as consultas
  listar: async () => {
    try {
      const consultas = await consultaService.listar();
      return { success: true, data: consultas };
    } catch (error: any) {
      return { 
        success: false, 
        error: error.message || "Erro ao listar consultas" 
      };
    }
  },

  // 🔹 Listar por médico
  listarPorMedico: async (medicoId: string) => {
    try {
      const consultas = await consultaService.listarPorMedico(medicoId);
      return { success: true, data: consultas };
    } catch (error: any) {
      return { 
        success: false, 
        error: error.message || "Erro ao buscar consultas do médico" 
      };
    }
  }
};