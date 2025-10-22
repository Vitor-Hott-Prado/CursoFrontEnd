import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IMedico extends Document {
  nome: string;
  especialidade: string;
}

const medicoSchema = new Schema<IMedico>({
  nome: { type: String, required: true },
  especialidade: { type: String, required: true },
});

export default models.Medico || model<IMedico>("Medico", medicoSchema);
