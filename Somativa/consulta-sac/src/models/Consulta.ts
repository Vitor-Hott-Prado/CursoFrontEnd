import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IConsulta extends Document {
  paciente: mongoose.Types.ObjectId;
  medico: mongoose.Types.ObjectId;
  data: Date;
  hora: string;
  status: "Agendada" | "Confirmada" | "Realizada" | "Cancelada";
}

const consultaSchema = new Schema<IConsulta>({
  paciente: { type: Schema.Types.ObjectId, ref: "Paciente", required: true },
  medico: { type: Schema.Types.ObjectId, ref: "Medico", required: true },
  data: { type: Date, required: true },
  hora: { type: String, required: true },
  status: {
    type: String,
    enum: ["Agendada", "Confirmada", "Realizada", "Cancelada"],
    default: "Agendada",
  },
});

// 🔒 Evita agendamento duplicado para o mesmo médico
consultaSchema.pre("save", async function (next) {
  const Consulta = mongoose.model("Consulta");

  const conflito = await Consulta.findOne({
    medico: this.medico,
    data: this.data,
    hora: this.hora,
  });

  if (conflito) {
    const err = new Error("Horário já ocupado para este médico.");
    return next(err);
  }

  next();
});

export default models.Consulta || model<IConsulta>("Consulta", consultaSchema);
