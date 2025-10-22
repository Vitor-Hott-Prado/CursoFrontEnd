import mongoose from "mongoose";

const PacienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String },
  telefone: { type: String },
  criadoEm: { type: Date, default: Date.now }
});

export default mongoose.models.Paciente || mongoose.model("Paciente", PacienteSchema);
