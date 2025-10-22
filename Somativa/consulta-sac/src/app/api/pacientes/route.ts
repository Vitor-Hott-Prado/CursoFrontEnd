import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/services/mongodb";
import Paciente from "@/models/Paciente";
import Usuario from "@/models/Usuario";

export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const { nome, telefone, email, senha } = await req.json();

    const existe = await Usuario.findOne({ email });
    if (existe) {
      return NextResponse.json({ success: false, error: "Email já cadastrado" });
    }

    const novoPaciente = new Paciente({ nome, telefone, email });
    await novoPaciente.save();

    const novoUsuario = new Usuario({ nome, email, senha, funcao: "paciente" });
    await novoUsuario.save();

    return NextResponse.json({ success: true, paciente: novoPaciente });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
