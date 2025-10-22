import mongoose from "mongoose";
import bcrypt from "bcryptjs";

interface IUsuario extends mongoose.Document {
  nome: string;
  email: string;
  senha: string;
  funcao: "recepcionista" | "medico" | "paciente";
  criadoEm: Date; // ⬅ tipo correto
  compararSenha(plain: string): Promise<boolean>;
}

const UsuarioSchema = new mongoose.Schema<IUsuario>({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  senha: { type: String, required: true },
  funcao: { type: String, enum: ["recepcionista","medico","paciente"], default: "paciente" },
  criadoEm: { type: Date, default: () => new Date() } // ⬅ função retorna Date
});

// Hash antes de salvar
UsuarioSchema.pre("save", async function(next) {
  if (!this.isModified("senha")) return next();
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

// Método para comparar senha
UsuarioSchema.methods.compararSenha = async function(plain: string) {
  return bcrypt.compare(plain, this.senha);
};

export default mongoose.models.Usuario || mongoose.model<IUsuario>("Usuario", UsuarioSchema);
